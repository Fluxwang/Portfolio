import { navItems, projects } from "../data";

export default function Nav({ active, activeProjectId }) {
  return (
    <nav className="hidden lg:block" aria-label="页内导航">
      <ul className="mt-16 w-max">
        {navItems.map(({ id, label }) => {
          const isActive = active === id;
          const isProjects = id === "projects";

          return (
            <li key={id}>
              <a href={`#${id}`} className="group flex items-center py-2.5">
                <span
                  className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                    isActive
                      ? "w-16 bg-lightest-slate"
                      : "w-8 bg-slate group-hover:w-16 group-hover:bg-lightest-slate group-focus-visible:w-16 group-focus-visible:bg-lightest-slate"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-lightest-slate"
                      : "text-slate group-hover:text-lightest-slate group-focus-visible:text-lightest-slate"
                  }`}
                >
                  {label}
                </span>
              </a>
              {isProjects && (
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <ul className="overflow-hidden">
                    {projects.map((project) => {
                      const isProjectActive =
                        isActive && activeProjectId === project.id;
                      return (
                        <li key={project.id}>
                          <a
                            href={`#project-${project.id}`}
                            className={`block max-w-48 py-1.5 pl-6 text-xs font-medium leading-snug transition-colors ${
                              isProjectActive
                                ? "text-accent"
                                : "text-slate hover:text-lightest-slate"
                            }`}
                          >
                            {project.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
