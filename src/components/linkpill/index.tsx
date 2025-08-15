import Icon from '../icons'
import type { LinkItem } from '../../data/links'

export default function LinkPill({ item }: { item: LinkItem }) {
  const isMail = item.href.startsWith('mailto:')
  return (
    <a
      href={item.href}
      target="_blank"
      className={`btn-pill ${item.color} flex items-center justify-between gap-3 border`}
      style={{ borderColor: `var(--border-color, rgba(0,0,0,.1))` }}
      aria-label={item.label}
    >
      <span className="chip text-black/70">
        <Icon name={item.leftIcon as any} width={30} height={30} />
      </span>
      <span className="flex-1 text-left font-semibold tracking-wide uppercase text-white">{item.label}</span>
      <span className="chip text-black/70">
        <Icon name={item.rightIcon as any} width={30} height={30} />
      </span>
    </a>
  )
}
