import { useState } from 'react'
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from 'react-icons/fi'
import { navLinks } from '../utils/content'
import { useTheme } from '../context/ThemeContext'
import { usePortfolio } from '../context/PortfolioContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { data } = usePortfolio()
  const profile = data.profile

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/75 px-6 py-4 backdrop-blur-xl transition-colors duration-500 light:border-slate-200/60 light:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300 light:text-slate-700">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl gradient-ring text-white shadow-soft">AS</span>
          <span>Ashutosh</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white light:text-slate-700 light:hover:text-slate-950">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={profile.resume} download className="hidden items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary/20 md:inline-flex">
            <FiDownload size={16} /> Resume
          </a>
          <button type="button" onClick={toggleTheme} className="rounded-full border border-slate-700/80 bg-slate-900/80 p-2 text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-primary light:border-slate-200/80 light:bg-white/80 light:text-slate-900">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent light:border-slate-200/80 light:bg-white/80 light:text-slate-900 md:hidden">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-soft light:bg-white/95 md:hidden">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900 hover:text-white light:text-slate-700 light:hover:bg-slate-100 light:hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
