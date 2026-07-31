import { useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeader from './SectionHeader'
import { socialLinks } from '../utils/content'
import { usePortfolio } from '../context/PortfolioContext'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  const { data } = usePortfolio()
  const profile = data.profile
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await emailjs.send('service_id', 'template_id', form, 'public_key')
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeader title="Contact" subtitle="Let’s connect" />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_0.8fr]">
        <div className="glass-panel rounded-[2rem] border border-white/10 p-8 shadow-soft light:border-slate-200/20 light:bg-white/80">
          <h3 className="text-xl font-semibold text-white light:text-slate-950">Get in touch</h3>
          <p className="mt-4 leading-7 text-slate-300 light:text-slate-700">Reach out for developer roles, contract work, or collaborative projects. I’m available for Python, Java, web, and IT graduate opportunities.</p>
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-200 light:border-slate-200/10 light:bg-slate-100/90 light:text-slate-950">
              <div className="flex items-center gap-3"><FiMail /> <span>{profile.email}</span></div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-200 light:border-slate-200/10 light:bg-slate-100/90 light:text-slate-950">
              <div className="flex items-center gap-3"><FiPhone /> <span>{profile.phone}</span></div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-200 light:border-slate-200/10 light:bg-slate-100/90 light:text-slate-950">
              <div className="flex items-center gap-3"><FiMapPin /> <span>{profile.location}</span></div>
            </div>
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-sm text-slate-200 transition hover:border-brand-accent hover:text-white light:border-slate-200/10 light:bg-slate-100/90 light:text-slate-950">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] border border-white/10 p-8 shadow-soft light:border-slate-200/20 light:bg-white/80">
          <div className="grid gap-4">
            <label className="space-y-2 text-sm text-slate-300 light:text-slate-700">
              <span>Name</span>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 light:border-slate-200/10 light:bg-white/90 light:text-slate-950" />
            </label>
            <label className="space-y-2 text-sm text-slate-300 light:text-slate-700">
              <span>Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 light:border-slate-200/10 light:bg-white/90 light:text-slate-950" />
            </label>
            <label className="space-y-2 text-sm text-slate-300 light:text-slate-700">
              <span>Subject</span>
              <input name="subject" value={form.subject} onChange={handleChange} required className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 light:border-slate-200/10 light:bg-white/90 light:text-slate-950" />
            </label>
            <label className="space-y-2 text-sm text-slate-300 light:text-slate-700">
              <span>Message</span>
              <textarea name="message" value={form.message} onChange={handleChange} required rows="5" className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 light:border-slate-200/10 light:bg-white/90 light:text-slate-950" />
            </label>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90">
              Send Message
            </button>
            {submitted && <p className="text-sm text-brand-accent">Message sent successfully! I’ll reply soon.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
