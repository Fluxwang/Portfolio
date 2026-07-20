import { profile } from '../data'
import SocialIcon from './Icons'

export default function SocialIcons() {
  return (
    <ul className="mt-8 flex items-center gap-5" aria-label="社交媒体链接">
      {profile.socials.map(({ label, href, icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${label}（在新标签页打开）`}
            title={label}
            className="block text-slate transition-colors hover:text-lightest-slate"
          >
            <SocialIcon name={icon} className="h-6 w-6" />
          </a>
        </li>
      ))}
    </ul>
  )
}
