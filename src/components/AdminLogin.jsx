import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { createAdminSession, getAdminPassword, isAdminAuthenticated } from '../utils/adminAuth'

export default function AdminLogin() {
  const navigate = useNavigate()
  const location = useLocation()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const meta = document.querySelector('meta[name="robots"]')
    if (!meta) {
      const tag = document.createElement('meta')
      tag.name = 'robots'
      tag.content = 'noindex,nofollow'
      document.head.appendChild(tag)
    } else {
      meta.setAttribute('content', 'noindex,nofollow')
    }

    if (isAdminAuthenticated()) {
      navigate('/admin', { replace: true })
    }
  }, [navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    const expectedPassword = getAdminPassword()
    if (!expectedPassword) {
      setError('Admin password is not configured.')
      return
    }

    if (password === expectedPassword) {
      createAdminSession()
      const nextPath = location.state?.from?.pathname || '/admin'
      navigate(nextPath, { replace: true })
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto flex max-w-md flex-col rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.28em] text-brand-accent">Private Access</p>
        <h1 className="mt-4 text-3xl font-semibold">Admin Login</h1>
        <p className="mt-3 text-sm leading-7 text-slate-400">This area is restricted to authorized administrators only and is not linked from the public navigation.</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block text-sm">
            <span className="mb-2 block text-slate-300">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-brand-primary"
              placeholder="Enter admin password"
              autoComplete="current-password"
            />
          </label>
          {error ? <p className="text-sm text-rose-400">{error}</p> : null}
          <button type="submit" className="w-full rounded-full bg-brand-primary px-4 py-3 font-semibold text-white transition hover:bg-brand-primary/90">
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}
