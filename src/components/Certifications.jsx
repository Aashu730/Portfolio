import SectionHeader from './SectionHeader'
import { certifications } from '../utils/content'
import { FiAward } from 'react-icons/fi'

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeader title="Certifications" subtitle="Professional growth" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div key={cert.title} className="group glass-panel rounded-[2rem] border border-white/10 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-primary/40 light:border-slate-200/20 light:bg-white/80">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
              <FiAward size={20} />
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-brand-accent">Certificate</p>
            <h3 className="mt-4 text-xl font-semibold text-white light:text-slate-950">{cert.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-700">{cert.issuer}</p>
            <p className="mt-4 text-sm text-slate-400 light:text-slate-600">{cert.status}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
