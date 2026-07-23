/*
  List — render an array as a list, without repeating map/key boilerplate.

  It owns *what* is rendered (the loop, the keys, the wrapper elements) and
  leaves *how it looks* to the caller via `className`. That keeps it
  layout-agnostic: pass grid classes for a card grid, flex classes for a
  row of links — same component either way.

    <List items={people} keyOf={(p) => p.id} className="grid gap-4">
      {(person) => <Card {...person} />}
    </List>

  Props:
    items          array to render (nullish / empty → renders `empty`)
    children       render function: (item, index) => node
    keyOf          (item, index) => React key   (defaults to the index)
    as             wrapper element              (default 'ul')
    itemAs         per-item element             (default 'li')
    className      classes for the wrapper
    itemClassName  classes for each item element
    empty          what to show when there are no items (default null)
*/
export default function List({
  items,
  children,
  keyOf = (_item, index) => index,
  as: Wrapper = 'ul',
  itemAs: Item = 'li',
  className = '',
  itemClassName = '',
  empty = null,
}) {
  if (!items || items.length === 0) return empty

  return (
    <Wrapper className={className}>
      {items.map((item, index) => (
        <Item key={keyOf(item, index)} className={itemClassName}>
          {children(item, index)}
        </Item>
      ))}
    </Wrapper>
  )
}
