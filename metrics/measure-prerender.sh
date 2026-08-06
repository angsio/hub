#!/usr/bin/env bash
#
# Measures the prerendering payload claim made on the resume and in
# README.md: how many bytes of HTML the home route actually serves,
# with and without build-time prerendering.
#
#   ./metrics/measure-prerender.sh
#
# Writes metrics/results.txt and prints the same to stdout.
#
# Method: `npm run build:client` is Vite alone, which emits the SPA
# shell with an empty <div id="root">. `npm run build` additionally
# compiles the app for Node and runs scripts/prerender.js over it. The
# only difference between the two dist/index.html files is the markup
# prerendering injects, which is the thing being measured.
#
# Runs the full build last, so dist/ is left in the state that should
# actually be deployed. Do not stop this script partway.

set -euo pipefail
cd "$(dirname "$0")/.."

OUT="metrics/results.txt"
ROUTE="dist/index.html"

command -v node > /dev/null || { echo "node not found" >&2; exit 1; }
[ -d node_modules ] || { echo "run npm install first" >&2; exit 1; }

echo "==> building client only (no prerender)"
npm run build:client > /dev/null 2>&1
plain=$(stat -c %s "$ROUTE")

echo "==> building with prerender"
npm run build > /dev/null 2>&1
pre=$(stat -c %s "$ROUTE")

# Text actually inside <body>, which is what a preview bot reads.
body_plain=0
body_pre=$(node -e '
  const fs=require("fs");
  const h=fs.readFileSync("dist/index.html","utf8");
  const m=h.match(/<div id="root">([\s\S]*?)<\/div>\s*<script/);
  process.stdout.write(String(m ? m[1].length : 0));
' 2>/dev/null || echo 0)

ratio=$(node -e "process.stdout.write((${pre}/${plain}).toFixed(2))")

{
  echo "prerender payload — dist/index.html, home route '/'"
  echo "measured $(date -u +%Y-%m-%dT%H:%M:%SZ) on $(git rev-parse --short HEAD 2>/dev/null || echo 'no git')"
  echo
  printf '  client build only   %6d bytes  (%.1f KB)\n' "$plain" "$(node -e "process.stdout.write(String(${plain}/1000))")"
  printf '  prerendered         %6d bytes  (%.1f KB)\n' "$pre"   "$(node -e "process.stdout.write(String(${pre}/1000))")"
  printf '  ratio               %sx\n' "$ratio"
  echo
  echo "  KB here is 1000 bytes, not 1024. State both figures in the"
  echo "  same unit on the resume — do not mix 'bytes' and 'KB'."
} | tee "$OUT"
