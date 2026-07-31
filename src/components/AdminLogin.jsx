import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  createAdminSession,
  getAdminPassword,
  isAdminAuthenticated,
} from '../utils/adminAuth'

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

    setError('')

    const expectedPassword = getAdminPassword()

    console.log('=================================')
    console.log('Entered Password :', password)
    console.log('Expected Password:', expectedPassword)
    console.log('Match:', password === expectedPassword)
    console.log('=================================')

    if (!expectedPassword) {
      setError('Admin password is not configured.')
      return
    }

    if (password.trim() === expectedPassword.trim()) {
      createAdminSession()

      const nextPath = location.state?.from?.pathname || '/admin'

      navigate(nextPath, { replace: true })
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.28em] text-brand-accent">
          Private Access
        </p>

        <h1 className="mt-4 text-3xl font-semibold">
          Admin Login
        </h1>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          This area is restricted to authorized administrators only.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              autoComplete="current-password"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-brand-primary"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-brand-primary px-4 py-3 font-semibold text-white transition hover:bg-brand-primary/90"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}