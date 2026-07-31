import SectionHeader from './SectionHeader'
import { usePortfolio } from '../context/PortfolioContext'

export default function GithubSection() {
  const { data } = usePortfolio()
  const github = data.github || { stats: [], pinned: [] }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24">
      <SectionHeader title="GitHub" subtitle="Open source summary" />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_0.8fr]">
        <div className="glass-panel rounded-[2rem] border border-white/10 p-8 shadow-soft light:border-slate-200/20 light:bg-white/80">
          <p className="text-sm uppercase tracking-[0.24em] text-brand-accent">GitHub Stats</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {github.stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-sm light:border-slate-200/10 light:bg-slate-100/90">
                <p className="text-3xl font-semibold text-white light:text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400 light:text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-[2rem] border border-white/10 p-8 shadow-soft light:border-slate-200/20 light:bg-white/80">
          <p className="text-sm uppercase tracking-[0.24em] text-brand-accent">Pinned Repositories</p>
          <div className="mt-8 space-y-4">
            {github.pinned.map((repo) => (
              <div key={repo.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 light:border-slate-200/10 light:bg-slate-100/90">
                <h3 className="text-lg font-semibold text-white light:text-slate-950">{repo.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300 light:text-slate-700">{repo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
