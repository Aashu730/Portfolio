import SectionHeader from './SectionHeader'
import { education } from '../utils/content'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeader title="Education" subtitle="Academic timeline" />
      <div className="space-y-8">
        {education.map((item) => (
          <div key={item.year} className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-soft light:border-slate-200/20 light:bg-white/80">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-brand-accent">{item.year}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white light:text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 light:text-slate-600">{item.institution}</p>
              </div>
              <div className="max-w-xl">
                <p className="text-sm leading-7 text-slate-300 light:text-slate-700">{item.description}</p>
                {item.detail ? <p className="mt-3 text-sm text-slate-400 light:text-slate-600">{item.detail}</p> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
