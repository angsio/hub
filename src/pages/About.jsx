import { about } from '../data/site'
import Page from '../components/Page'
import Button from '../components/Button'

export function About() {
  return (
    <Page title="About" intro="Who am I? Who will I become?">
      <div className="mx-auto max-w-2xl space-y-5 text-left text-parchment-dim">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button to="/works" variant="primary">
          My Works
        </Button>
      </div>
    </Page>
  )
}
