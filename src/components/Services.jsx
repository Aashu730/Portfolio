import { FiCode, FiServer, FiDatabase, FiCpu, FiZap, FiLayers } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { services } from '../utils/content'

const icons = {
  development: FiCode,
  backend: FiServer,
  database: FiDatabase,
  machineLearning: FiCpu,
  api: FiZap,
  architecture: FiLayers,
}

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeader title="Services" subtitle="What I can build" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.icon]
          return (
            <div key={service.title} className="group glass-panel rounded-[2rem] border border-white/10 p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand-primary/40 light:border-slate-200/20 light:bg-white/80">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white light:text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-700">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
