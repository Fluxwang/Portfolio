import Tag from "./Tag";
import { ArrowUpRightIcon } from "./Icons";

export default function ProjectCard({ project }) {
  const { title, period, href, description, tags } = project;

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2">
          {period}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-lightest-slate">
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title}（在新标签页打开）`}
              className="group/link inline-flex items-baseline text-base font-medium leading-tight text-lightest-slate transition-colors hover:text-accent focus-visible:text-accent"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {title}
                <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="使用的技术">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
