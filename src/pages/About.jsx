import Page from '../components/Page'
import Button from '../components/Button'
import AboutBody from '../content/about.mdx'

export function About() {
  return (
    <Page title="About" intro="Who am I? Who do I want to be?">
      <article className="prose mx-auto max-w-2xl text-left text-parchment-dim">
        <AboutBody />
      </article>

      <div className="mt-12 flex justify-center">
        <Button to="/works" variant="primary">
          My Works
        </Button>
      </div>
    </Page>
  )
}
