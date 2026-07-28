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
