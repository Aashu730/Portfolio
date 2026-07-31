import SectionHeader from './SectionHeader'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { usePortfolio } from '../context/PortfolioContext'

export default function Projects() {
  const { data } = usePortfolio()
  const projects = data.projects || []

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeader title="Projects" subtitle="Selected work" />
      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group glass-panel rounded-[2rem] border border-white/10 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-primary/40 light:border-slate-200/20 light:bg-white/80"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 p-4">
              <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-slate-950/85 p-5 text-slate-200 light:border-slate-200/20 light:bg-slate-100/90 light:text-slate-900">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-brand-accent">
                  <span>Premium UI</span>
                  <span>Case study</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white light:text-slate-950">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-700">{project.summary}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200 light:border-slate-200/20 light:bg-slate-100/90 light:text-slate-950">
                  {item}
                </span>
              ))}
            </div>
            <ul className="mt-6 space-y-2 text-sm leading-7 text-slate-300 light:text-slate-700">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-accent" /> {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.github} className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-primary hover:text-brand-primary light:border-slate-200/60 light:bg-white/80 light:text-slate-950">
                <FiGithub /> GitHub
              </a>
              <a href={project.demo} className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-primary/90">
                <FiExternalLink /> View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
