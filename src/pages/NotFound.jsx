import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-slate-100 light:bg-slate-50 light:text-slate-950">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/80 px-8 py-16 shadow-soft backdrop-blur-2xl light:border-slate-200/20 light:bg-white/90">
        <p className="text-sm uppercase tracking-[0.28em] text-brand-accent">Page not found</p>
        <h1 className="mt-4 text-5xl font-semibold">404</h1>
        <p className="mt-6 text-sm leading-7 text-slate-300 light:text-slate-700">The page you are looking for could not be found. Return to the portfolio homepage to explore my skills and projects.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90">
          Back to home
        </Link>
      </div>
    </div>
  )
}
