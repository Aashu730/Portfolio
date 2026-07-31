import SectionHeader from './SectionHeader'
import { usePortfolio } from '../context/PortfolioContext'

export default function Achievements() {
  const { data } = usePortfolio()
  const achievements = data.achievements || []

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeader title="Achievements" subtitle="Milestones" />
      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((item) => (
          <div key={item.title} className="glass-panel rounded-[2rem] border border-white/10 p-6 shadow-soft light:border-slate-200/20 light:bg-white/80">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-accent">{item.title}</p>
            <p className="mt-4 text-sm leading-7 text-slate-300 light:text-slate-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
