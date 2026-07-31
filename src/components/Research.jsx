import SectionHeader from './SectionHeader'
import { research } from '../utils/content'

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeader title="Research" subtitle="Published work" />
      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.55fr]">
        <div className="glass-panel rounded-[2rem] border border-white/10 p-8 shadow-soft light:border-slate-200/20 light:bg-white/80">
          <p className="text-sm uppercase tracking-[0.24em] text-brand-accent">Publication</p>
          <h3 className="mt-4 text-2xl font-semibold text-white light:text-slate-950">{research.title}</h3>
          <p className="mt-4 text-sm leading-8 text-slate-300 light:text-slate-700">{research.summary}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 light:border-slate-200/20 light:bg-slate-100/90 light:text-slate-950">{research.journal}</span>
            <span className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 light:border-slate-200/20 light:bg-slate-100/90 light:text-slate-950">{research.date}</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {research.highlights.map((item) => (
              <span key={item} className="rounded-full bg-brand-primary/10 px-3 py-2 text-sm text-brand-primary">{item}</span>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-[2rem] border border-white/10 p-8 shadow-soft light:border-slate-200/20 light:bg-white/80">
          <p className="text-sm uppercase tracking-[0.24em] text-brand-accent">Research focus</p>
          <h4 className="mt-4 text-xl font-semibold text-white light:text-slate-950">AI, data systems, and practical problem solving</h4>
          <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-700">This work reflects a strong interest in intelligent systems, applied computing, and turning research into meaningful software solutions.</p>
        </div>
      </div>
    </section>
  )
}
