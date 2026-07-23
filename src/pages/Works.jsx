import { portals } from '../data/site'
import Page from '../components/Page'
import List from '../components/List'
import SectionCard from '../components/SectionCard'

const styles = {
  grid: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
}

/*
  Works — the grid of containers. <List> handles the loop + keys; each item is
  a <SectionCard> linking out to a subdomain (which opens in a new tab). Cards
  stretch to equal height, so a longer blurb doesn't make one card taller.
*/
export default function Works() {
  return (
    <Page
      title="My Containers"
      intro="Each is separate, hosted on my Raspberry Pi — they open in a new tab."
    >
      <List items={portals} keyOf={(portal) => portal.title} className={styles.grid}>
        {(portal) => <SectionCard {...portal} />}
      </List>
    </Page>
  )
}
