import SectionHeader from './SectionHeader'
import { usePortfolio } from '../context/PortfolioContext'

const highlights = [
  'Software Development',
  'Problem Solving',
  'Backend Development',
  'Python',
  'Java',
  'SQL',
  'Machine Learning',
  'Cloud Computing',
]

export default function About() {
  const { data } = usePortfolio()
  const profile = data.profile

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeader title="About me" subtitle="Professional story" />
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel rounded-[2rem] border border-white/10 p-8 shadow-soft light:border-slate-200/20 light:bg-white/80">
          <p className="text-sm uppercase tracking-[0.28em] text-brand-accent">Overview</p>
          <h3 className="mt-4 text-2xl font-semibold text-white light:text-slate-950">A thoughtful developer with a strong foundation in software engineering and emerging technologies.</h3>
          <p className="mt-5 leading-8 text-slate-300 light:text-slate-700">
            {profile.summary} I enjoy working across full-stack product experiences, backend logic, clean architecture, and the practical application of AI and cloud concepts.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 text-sm text-slate-200 light:border-slate-200/10 light:bg-slate-50/90 light:text-slate-900">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-soft backdrop-blur-xl light:border-slate-200/20 light:bg-white/80">
          <div className="flex flex-col gap-6 rounded-[1.6rem] bg-slate-950/80 p-6 light:bg-slate-100/80">
            <div className="flex items-center justify-between rounded-3xl bg-brand-primary/10 p-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-primary">Profile snapshot</h3>
                <p className="mt-2 text-sm text-slate-300 light:text-slate-700">Research-driven developer with strong academic and project-based experience.</p>
              </div>
              <div className="rounded-2xl border border-brand-primary/20 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-brand-primary light:bg-white/80">
                AI · Cloud
              </div>
            </div>
            <div className="grid gap-3">
              <SummaryItem label="Education" value="M.Sc. Information Technology" />
              <SummaryItem label="Status" value="Result Awaited" />
              <SummaryItem label="Research" value="Published research work" />
              <SummaryItem label="Certifications" value="Google Cloud • Google Data Science" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SummaryItem({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-sm light:border-slate-200/10 light:bg-white/90">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white light:text-slate-950">{value}</p>
    </div>
  )
}
