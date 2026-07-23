import { about } from '../data/site'
import Page from '../components/Page'
import Button from '../components/Button'

const styles = {
  prose: 'mx-auto max-w-2xl space-y-5 text-left text-parchment-dim',
  actions: 'mt-12 flex justify-center',
}

/*
  About — a short bio. Copy lives in `about` (src/data/site.js) so it's edited
  in one place, and closes with a route back to the work.
*/
export default function About() {
  return (
    <Page title="About" intro="Who's behind the containers.">
      <div className={styles.prose}>
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.actions}>
        <Button to="/works" variant="primary">
          See the works
        </Button>
      </div>
    </Page>
  )
}
