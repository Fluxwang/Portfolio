import { navItems } from '../data'

export default function Nav({ active }) {
  return (
    <nav className="hidden lg:block" aria-label="页内导航">
      <ul className="mt-16 w-max">
        {navItems.map(({ id, label }) => {
          const isActive = active === id
          return (
            <li key={id}>
              <a href={`#${id}`} className="group flex items-center py-3">
                <span
                  className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                    isActive
                      ? 'w-16 bg-lightest-slate'
                      : 'w-8 bg-slate group-hover:w-16 group-hover:bg-lightest-slate group-focus-visible:w-16 group-focus-visible:bg-lightest-slate'
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? 'text-lightest-slate'
                      : 'text-slate group-hover:text-lightest-slate group-focus-visible:text-lightest-slate'
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
