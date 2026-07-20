import { useEffect, useState } from 'react'
import Spotlight from './components/Spotlight'
import Sidebar from './components/Sidebar'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Tag from './components/Tag'
import { about, projects, skills, navItems } from './data'

function useActiveSection() {
  const [active, setActive] = useState(navItems[0].id)

  useEffect(() => {
    const onScroll = () => {
      let current = navItems[0].id
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

function About() {
  return (
    <Section id="about" title="关于">
      <div className="space-y-4">
        {about.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" title="项目">
      <ol className="group/list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ol>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="技能">
      <ol className="group/list space-y-10">
        {skills.map(({ category, items, note }) => (
          <li key={category}>
            <h3 className="mb-2 font-medium text-lightest-slate">{category}</h3>
            <p className="mb-3 text-sm leading-normal">{note}</p>
            <ul className="flex flex-wrap gap-1.5" aria-label={category}>
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate sm:pb-0">
      <p>
        设计灵感来自{' '}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-light-slate transition-colors hover:text-accent"
        >
          Brittany Chiang
        </a>
        ，使用{' '}
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-light-slate transition-colors hover:text-accent"
        >
          React
        </a>{' '}
        与{' '}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-light-slate transition-colors hover:text-accent"
        >
          Tailwind CSS
        </a>{' '}
        构建，部署于{' '}
        <a
          href="https://pages.cloudflare.com"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-light-slate transition-colors hover:text-accent"
        >
          Cloudflare Pages
        </a>
        。
      </p>
    </footer>
  )
}

export default function App() {
  const active = useActiveSection()

  return (
    <div className="relative">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:justify-between lg:gap-4 lg:px-24 lg:py-0">
        <Sidebar active={active} />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Projects />
          <Skills />
          <Footer />
        </main>
      </div>
    </div>
  )
}
