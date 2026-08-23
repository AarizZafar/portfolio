export default function NeuCard({
  children,
  className = '',
  hover = false,
  inset = false,
  as: Tag = 'div',
  ...props
}) {
  const base = inset
    ? 'neu-inset skeu-recessed'
    : hover
      ? 'neu-card neu-card-hover skeu-card'
      : 'neu-card skeu-card'
  return (
    <Tag className={`${base} relative ${className}`} {...props}>
      <div className="card-content">{children}</div>
    </Tag>
  )
}
