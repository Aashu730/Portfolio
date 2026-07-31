import { FiChevronUp } from 'react-icons/fi'
import { socialLinks } from '../utils/content'
import { usePortfolio } from '../context/PortfolioContext'

export default function Footer() {
  const { data } = usePortfolio()
  const profile = data.profile

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/90 px-6 py-10 text-slate-400 light:border-slate-200/40 light:bg-slate-50 light:text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white light:text-slate-950">{profile.name}</p>
          <p className="mt-3 text-sm">Premium portfolio crafted for software developer and graduate roles.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="text-sm transition hover:text-white light:hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </div>
        <a href="#home" className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 light:bg-white/90 light:text-slate-950">
          <FiChevronUp /> Back to top
        </a>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500 light:text-slate-500">© 2026 {profile.name}. Designed for modern developer careers.</p>
    </footer>
  )
}
