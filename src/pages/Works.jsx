import { portals } from '../data/site'
import Page from '../components/Page'
import List from '../components/List'
import SectionCard from '../components/SectionCard'

/*
  Works — the grid of containers. <List> handles the loop + keys; each item is
  a <SectionCard> linking out to a subdomain (which opens in a new tab). The
  grid layout is a plain className on the list, so changing columns is one edit.
*/
export default function Works() {
  return (
    <Page
      title="My Works"
      intro="Each are hosted on my Home Lab."
    >
      <List
        items={portals}
        keyOf={(portal) => portal.title}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {(portal) => <SectionCard {...portal} />}
      </List>
    </Page>
  )
}
