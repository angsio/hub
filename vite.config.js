import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'

// MDX must run *before* the React plugin so the JSX it emits gets compiled.
// `enforce: 'pre'` is what guarantees that ordering.
export default defineConfig({
  plugins: [{ enforce: 'pre', ...mdx() }, react(), tailwindcss()],
})
