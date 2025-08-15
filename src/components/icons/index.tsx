import React from 'react'

type IconName =
  | 'gamepad'|'xbox'|'ps'|'switch'|'steam' | 'instagram'
  | 'youtube'|'x'|'discord'|'download'|'mail'|'play'|'link'|'chat' 

type Props = React.SVGProps<SVGSVGElement> & { name: IconName }

export default function Icon({ name, ...rest }: Props) {
  switch (name) {
    case 'gamepad':
      return (<svg viewBox="0 0 24 24" {...rest}><path fill="currentColor" d="M7 10h2v2H7v2H5v-2H3v-2h2V8h2v2Zm10.25-1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM9 15h6l1.5 1.5h2a3.5 3.5 0 0 0 0-7h-2L15 11H9l-1.5-1.5h-2a3.5 3.5 0 0 0 0 7h2L9 15Z"/></svg>)
    case 'xbox':
      return (<svg viewBox="0 0 24 24" {...rest}><circle cx="12" cy="12" r="9" fill="currentColor" opacity=".2"/><path fill="currentColor" d="M7.5 7.5 16.5 16.5M16.5 7.5 7.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>)
    case 'ps':
      return (<svg viewBox="0 0 24 24" {...rest}><rect x="13" y="7" width="6" height="6" rx="1" fill="currentColor"/><path d="M11 17 6 8l-5 9h10Z" fill="currentColor"/></svg>)
    case 'switch':
      return (<svg viewBox="0 0 24 24" {...rest}><rect x="3" y="4" width="8" height="16" rx="3" fill="currentColor"/><rect x="13" y="4" width="8" height="16" rx="3" fill="currentColor" opacity=".5"/><circle cx="7" cy="16" r="1.6" fill="#fff"/><circle cx="17" cy="8" r="1.6" fill="#fff"/></svg>)
    case 'steam':
      return (<svg viewBox="0 0 24 24" {...rest}><circle cx="12" cy="12" r="9" fill="currentColor" opacity=".15"/><circle cx="16" cy="9" r="3" fill="currentColor"/><circle cx="16" cy="9" r="1.6" fill="#fff"/><path d="M5 14l4 1.5a3 3 0 1 0 3-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>)
    case 'youtube':
      return (<svg viewBox="0 0 24 24" {...rest}><path fill="currentColor" d="M21.6 7.3a3 3 0 0 0-2-2C18 5 12 5 12 5s-6 0-7.6.3a3 3 0 0 0-2 2A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.7 3 3 0 0 0 2 2C6 19 12 19 12 19s6 0 7.6-.3a3 3 0 0 0 2-2 31 31 0 0 0 .4-4.7 31 31 0 0 0-.4-4.7ZM10 9.8l5.2 2.2L10 14.2V9.8Z"/></svg>)
    case 'x':
      return (<svg viewBox="0 0 24 24" {...rest}><path fill="currentColor" d="M4 5.3 10.9 14l-6.7 4.7h2.1l5.8-4.1 4.7 4.1H20l-7.3-6.4L19.9 5.3h-2L12.5 10 8.1 5.3H4Z"/></svg>)
    case 'discord':
      return (<svg viewBox="0 0 24 24" {...rest}><path fill="currentColor" d="M4 5h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>)
    case 'download':
      return (<svg viewBox="0 0 24 24" {...rest}><path fill="currentColor" d="M12 3v9.6l3-3 .9.9-4.2 4.2L7.5 10.5l.9-.9 3 3V3h.6ZM5 18h14v2H5v-2Z"/></svg>)
    case 'mail':
      return (<svg viewBox="0 0 24 24" {...rest}><path fill="currentColor" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm8 6L4.8 8.9 4 9.4V16h16V9.4l-.8-.5L12 12Z"/></svg>)
    case 'play':
      return (<svg viewBox="0 0 24 24" {...rest}><path fill="currentColor" d="m9 7 8 5-8 5V7Z"/></svg>)
    case 'link':
      return (<svg viewBox="0 0 24 24" {...rest}><path fill="currentColor" d="M7.8 13.4a3.4 3.4 0 0 1 0-4.8l3-3a3.4 3.4 0 1 1 4.8 4.8l-1 1-.9-.9 1-1a2.1 2.1 0 0 0-3-3l-3 3a2.1 2.1 0 0 0 0 3l.9.9-.9.9Zm8.4-2.8a3.4 3.4 0 0 1 0 4.8l-3 3a3.4 3.4 0 0 1-4.8-4.8l1-1 .9.9-1 1a2.1 2.1 0 1 0 3 3l3-3a2.1 2.1 0 0 0 0-3l-.9-.9.9-.9Z"/></svg>)
    case 'chat':
      return (<svg viewBox="0 0 24 24" {...rest}><path fill="currentColor" d="M4 4h16v10H7l-3 3V4Z"/></svg>)
    case 'instagram':
      return (<svg viewBox="0 0 24 24" {...rest}><rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="7" r="1.2" fill="currentColor"/></svg>)
  }
}
