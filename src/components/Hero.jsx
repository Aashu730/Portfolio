import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { socialLinks } from '../utils/content'
import { usePortfolio } from '../context/PortfolioContext'

export default function Hero() {
  const { data } = usePortfolio()
  const profile = data.profile

  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-28 sm:pt-32 lg:pb-32 lg:pt-36">
      <div className="absolute inset-x-0 top-0 h-72 bg-hero-glow opacity-90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.16),_transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl space-y-7">
            <span className="inline-flex rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-brand-primary backdrop-blur">
              Software Developer • Python • Java • AI
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white light:text-slate-950 sm:text-5xl lg:text-6xl">
              Hello, I&apos;m{' '}
              <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <div className="text-xl font-semibold text-brand-accent sm:text-2xl">
              Python Developer
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-300 light:text-slate-700">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={profile.resume} download className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-primary/90">
                <FiDownload className="mr-2" /> Download Resume
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-brand-accent hover:text-brand-accent light:bg-white/80 light:text-slate-950">
                View Projects <FiArrowRight className="ml-2" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-slate-400 light:text-slate-600">
              <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 light:border-slate-200/60 light:bg-slate-100/80">Published Research</span>
              <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 light:border-slate-200/60 light:bg-slate-100/80">M.Sc. Information Technology</span>
              <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 light:border-slate-200/60 light:bg-slate-100/80">Result Awaited</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-br from-brand-primary/30 via-brand-secondary/20 to-brand-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-900/65 p-4 shadow-soft backdrop-blur-3xl light:border-slate-200/20 light:bg-white/80">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_34%)]" />
              <div className="relative rounded-[1.8rem] border border-white/10 bg-slate-950/80 p-4 light:border-slate-200/25 light:bg-slate-100/80">
                <div className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-slate-900/70 px-4 py-4 text-slate-200 light:border-slate-200/20 light:bg-white/80 light:text-slate-900">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">Developer Profile</p>
                    <p className="mt-2 text-sm font-semibold">{profile.name}</p>
                  </div>
                  <div className="rounded-2xl border border-brand-primary/20 bg-brand-primary/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary">
                    Open to work
                  </div>
                </div>
                <div className="mt-4 overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900/80 light:border-slate-200/20 light:bg-white/90">
                  <img src={profile.photo || '/resume.pdf'} alt={profile.name} className="h-[380px] w-full object-cover object-center sm:h-[460px]" />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm light:border-slate-200/20 light:bg-slate-50/90">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Focus</p>
                    <p className="mt-2 text-base font-semibold text-white light:text-slate-950">Full Stack</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm light:border-slate-200/20 light:bg-slate-50/90">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Specialty</p>
                    <p className="mt-2 text-base font-semibold text-white light:text-slate-950">Cloud + AI</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm light:border-slate-200/20 light:bg-slate-50/90">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Stack</p>
                    <p className="mt-2 text-base font-semibold text-white light:text-slate-950">React • Python</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const icons = {
                      github: FiGithub,
                      linkedin: FiLinkedin,
                      mail: FiMail,
                    }
                    const Icon = icons[social.icon] || FiMail
                    return (
                      <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/75 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-primary hover:text-white light:border-slate-200/20 light:bg-white/90 light:text-slate-950">
                        <Icon size={16} /> {social.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
