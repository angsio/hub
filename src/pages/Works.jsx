import { portals } from '../data/site'
import Page from '../components/Page'
import List from '../components/List'
import SectionCard from '../components/SectionCard'

export function Works() {
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
