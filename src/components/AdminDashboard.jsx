import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { clearAdminSession, extendAdminSession } from '../utils/adminAuth'
import { useNavigate } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext'

const tabs = ['Overview', 'Profile', 'Media', 'Projects', 'GitHub', 'Achievements', 'Skills', 'Appearance']

export default function AdminDashboard() {
  const navigate = useNavigate()
  const { data, setData, setProfile, setAppearance } = usePortfolio()
  const [activeTab, setActiveTab] = useState('Overview')
  const [newSkill, setNewSkill] = useState('')
  const [newAchievement, setNewAchievement] = useState({ title: '', description: '' })
  const [mediaForm, setMediaForm] = useState({
    photoUrl: data.profile.photo || '',
    resumeUrl: data.profile.resume || '',
    photoName: '',
    resumeName: '',
  })
  const [projectDrafts, setProjectDrafts] = useState(() =>
    (data.projects || []).map((project) => ({
      ...project,
      stack: Array.isArray(project.stack) ? project.stack.join(', ') : '',
      features: Array.isArray(project.features) ? project.features.join(', ') : '',
    })),
  )
  const [githubDraft, setGithubDraft] = useState({
    stats: (data.github?.stats || []).map((item) => ({ ...item })),
    pinned: (data.github?.pinned || []).map((item) => ({ ...item })),
  })

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

    const timer = window.setInterval(() => {
      extendAdminSession()
    }, 60 * 1000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    setMediaForm((current) => ({
      ...current,
      photoUrl: data.profile.photo || '',
      resumeUrl: data.profile.resume || '',
    }))
  }, [data.profile.photo, data.profile.resume])

  useEffect(() => {
    setProjectDrafts(
      (data.projects || []).map((project) => ({
        ...project,
        stack: Array.isArray(project.stack) ? project.stack.join(', ') : '',
        features: Array.isArray(project.features) ? project.features.join(', ') : '',
      })),
    )
  }, [data.projects])

  useEffect(() => {
    setGithubDraft({
      stats: (data.github?.stats || []).map((item) => ({ ...item })),
      pinned: (data.github?.pinned || []).map((item) => ({ ...item })),
    })
  }, [data.github])

  const stats = useMemo(
    () => [
      { label: 'Portfolio Visitors', value: '0' },
      { label: 'Resume Downloads', value: '0' },
      { label: 'Contact Messages', value: '0' },
      { label: 'Last Login', value: 'Now' },
    ],
    [],
  )

  const handleLogout = () => {
    clearAdminSession()
    navigate('/admin-login', { replace: true })
  }

  const handleMediaSave = (event) => {
    event.preventDefault()
    setProfile({ photo: mediaForm.photoUrl || '/resume.pdf', resume: mediaForm.resumeUrl || '/resume.pdf' })
  }

  const handleFileUpload = (event, type) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result
      if (typeof result !== 'string') return

      if (type === 'photo') {
        setMediaForm((current) => ({ ...current, photoUrl: result, photoName: file.name }))
        setProfile({ photo: result })
      }

      if (type === 'resume') {
        setMediaForm((current) => ({ ...current, resumeUrl: result, resumeName: file.name }))
        setProfile({ resume: result })
      }
    }
    reader.readAsDataURL(file)
  }

  const handleAddSkill = (event) => {
    event.preventDefault()
    if (!newSkill.trim()) return
    setData((current) => ({
      ...current,
      skills: [...current.skills, { name: newSkill.trim(), icon: '' }],
    }))
    setNewSkill('')
  }

  const handleDeleteSkill = (index) => {
    setData((current) => ({
      ...current,
      skills: current.skills.filter((_, itemIndex) => itemIndex !== index),
    }))
  }

  const handleAddAchievement = (event) => {
    event.preventDefault()
    if (!newAchievement.title.trim()) return
    setData((current) => ({
      ...current,
      achievements: [
        ...(current.achievements || []),
        {
          title: newAchievement.title.trim(),
          description: newAchievement.description.trim() || 'Added from admin dashboard.',
        },
      ],
    }))
    setNewAchievement({ title: '', description: '' })
  }

  const handleDeleteAchievement = (index) => {
    setData((current) => ({
      ...current,
      achievements: (current.achievements || []).filter((_, itemIndex) => itemIndex !== index),
    }))
  }

  const handleSaveProjects = (event) => {
    event.preventDefault()
    setData((current) => ({
      ...current,
      projects: projectDrafts.map((project) => ({
        ...project,
        stack: project.stack
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),
        features: project.features
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),
      })),
    }))
  }

  const handleAddProject = () => {
    setProjectDrafts((current) => [
      ...current,
      { title: '', summary: '', stack: '', features: '', github: '#', demo: '#contact' },
    ])
  }

  const handleRemoveProject = (index) => {
    setProjectDrafts((current) => current.filter((_, itemIndex) => itemIndex !== index))
  }

  const handleProjectFieldChange = (index, field, value) => {
    setProjectDrafts((current) => current.map((project, itemIndex) => (itemIndex === index ? { ...project, [field]: value } : project)))
  }

  const handleSaveGithub = (event) => {
    event.preventDefault()
    setData((current) => ({
      ...current,
      github: {
        stats: githubDraft.stats.filter((item) => item.label || item.value),
        pinned: githubDraft.pinned.filter((item) => item.title || item.description),
      },
    }))
  }

  const handleAddGithubStat = () => {
    setGithubDraft((current) => ({ ...current, stats: [...current.stats, { label: '', value: '' }] }))
  }

  const handleAddGithubRepo = () => {
    setGithubDraft((current) => ({ ...current, pinned: [...current.pinned, { title: '', description: '' }] }))
  }

  const handleGithubFieldChange = (type, index, field, value) => {
    setGithubDraft((current) => ({
      ...current,
      [type]: current[type].map((item, itemIndex) => (itemIndex === index ? { ...item, [field]: value } : item)),
    }))
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 lg:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-soft backdrop-blur-xl lg:p-6">
        <header className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-brand-accent">Private Admin Dashboard</p>
            <h1 className="mt-2 text-2xl font-semibold">Portfolio Control Center</h1>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={handleLogout} className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-primary">
              Logout
            </button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-accent">Navigation</p>
            <nav className="mt-4 space-y-2">
              {tabs.map((tab) => (
                <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`flex w-full items-center rounded-2xl px-4 py-3 text-left text-sm transition ${activeTab === tab ? 'bg-brand-primary/20 text-white' : 'text-slate-300 hover:bg-slate-900'}`}>
                  {tab}
                </button>
              ))}
            </nav>
          </aside>

          <main className="space-y-6">
            {activeTab === 'Overview' ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </motion.div>
            ) : null}

            {activeTab === 'Profile' ? (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                }}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6"
              >
                <h2 className="text-xl font-semibold">Profile</h2>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Name</span>
                    <input value={data.profile.name} onChange={(event) => setProfile({ name: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Professional Title</span>
                    <input value={data.profile.title} onChange={(event) => setProfile({ title: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                  <label className="text-sm text-slate-300 lg:col-span-2">
                    <span className="mb-2 block">About Me</span>
                    <textarea rows="4" value={data.profile.summary} onChange={(event) => setProfile({ summary: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Email</span>
                    <input value={data.profile.email} onChange={(event) => setProfile({ email: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Phone</span>
                    <input value={data.profile.phone} onChange={(event) => setProfile({ phone: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Location</span>
                    <input value={data.profile.location} onChange={(event) => setProfile({ location: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">GitHub</span>
                    <input value={data.profile.github} onChange={(event) => setProfile({ github: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">LinkedIn</span>
                    <input value={data.profile.linkedin} onChange={(event) => setProfile({ linkedin: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                </div>
                <button type="submit" className="mt-6 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white">
                  Save Profile
                </button>
              </form>
            ) : null}

            {activeTab === 'Media' ? (
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <h2 className="text-xl font-semibold">Media & Resume</h2>
                <form onSubmit={handleMediaSave} className="mt-6 grid gap-4 lg:grid-cols-2">
                  <label className="text-sm text-slate-300 lg:col-span-2">
                    <span className="mb-2 block">Personal Photo</span>
                    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:flex-row sm:items-center">
                      <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white">
                        Upload Photo
                        <input type="file" accept="image/*" className="sr-only" onChange={(event) => handleFileUpload(event, 'photo')} />
                      </label>
                      <span className="text-sm text-slate-400">{mediaForm.photoName || 'Choose an image from your device'}</span>
                    </div>
                    <input value={mediaForm.photoUrl.startsWith('data:') ? '' : mediaForm.photoUrl} onChange={(event) => setMediaForm((current) => ({ ...current, photoUrl: event.target.value, photoName: '' }))} className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Or paste an image URL" />
                  </label>
                  <label className="text-sm text-slate-300 lg:col-span-2">
                    <span className="mb-2 block">Resume</span>
                    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:flex-row sm:items-center">
                      <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white">
                        Upload Resume
                        <input type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={(event) => handleFileUpload(event, 'resume')} />
                      </label>
                      <span className="text-sm text-slate-400">{mediaForm.resumeName || 'Choose a PDF or document from your device'}</span>
                    </div>
                    <input value={mediaForm.resumeUrl.startsWith('data:') ? '' : mediaForm.resumeUrl} onChange={(event) => setMediaForm((current) => ({ ...current, resumeUrl: event.target.value, resumeName: '' }))} className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Or paste a resume URL" />
                  </label>
                  <div className="flex items-center justify-center rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/80 p-6 lg:col-span-2">
                    {mediaForm.photoUrl ? (
                      <div className="w-full max-w-[320px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/90 p-3 shadow-2xl shadow-black/30">
                        <img src={mediaForm.photoUrl} alt="Preview" className="aspect-[4/5] w-full rounded-[1.1rem] object-cover object-center" />
                      </div>
                    ) : (
                      <p className="text-sm text-slate-400">Upload a photo to preview it here.</p>
                    )}
                  </div>
                  <button type="submit" className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white">Save Media</button>
                </form>
              </div>
            ) : null}

            {activeTab === 'Projects' ? (
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold">Projects</h2>
                  <button type="button" onClick={handleAddProject} className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white">
                    Add Project
                  </button>
                </div>
                <form onSubmit={handleSaveProjects} className="mt-6 space-y-4">
                  {projectDrafts.map((project, index) => (
                    <div key={`project-${index}`} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <div className="grid gap-4 lg:grid-cols-2">
                        <label className="text-sm text-slate-300">
                          <span className="mb-2 block">Project Title</span>
                          <input value={project.title} onChange={(event) => handleProjectFieldChange(index, 'title', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                        </label>
                        <label className="text-sm text-slate-300">
                          <span className="mb-2 block">GitHub Link</span>
                          <input value={project.github || ''} onChange={(event) => handleProjectFieldChange(index, 'github', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                        </label>
                        <label className="text-sm text-slate-300 lg:col-span-2">
                          <span className="mb-2 block">Summary</span>
                          <textarea rows="3" value={project.summary} onChange={(event) => handleProjectFieldChange(index, 'summary', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                        </label>
                        <label className="text-sm text-slate-300">
                          <span className="mb-2 block">Demo Link</span>
                          <input value={project.demo || ''} onChange={(event) => handleProjectFieldChange(index, 'demo', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                        </label>
                        <label className="text-sm text-slate-300">
                          <span className="mb-2 block">Stack (comma separated)</span>
                          <input value={project.stack} onChange={(event) => handleProjectFieldChange(index, 'stack', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                        </label>
                        <label className="text-sm text-slate-300 lg:col-span-2">
                          <span className="mb-2 block">Features (comma separated)</span>
                          <input value={project.features} onChange={(event) => handleProjectFieldChange(index, 'features', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                        </label>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button type="button" onClick={() => handleRemoveProject(index)} className="rounded-full border border-rose-400/20 px-3 py-2 text-sm text-rose-300">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <button type="submit" className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white">
                    Save Projects
                  </button>
                </form>
              </div>
            ) : null}

            {activeTab === 'GitHub' ? (
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold">GitHub Section</h2>
                  <div className="flex gap-2">
                    <button type="button" onClick={handleAddGithubStat} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
                      Add Stat
                    </button>
                    <button type="button" onClick={handleAddGithubRepo} className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white">
                      Add Repo
                    </button>
                  </div>
                </div>
                <form onSubmit={handleSaveGithub} className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">GitHub Stats</h3>
                    <div className="mt-4 space-y-3">
                      {githubDraft.stats.map((item, index) => (
                        <div key={`stat-${index}`} className="grid gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 md:grid-cols-2">
                          <input value={item.label} onChange={(event) => handleGithubFieldChange('stats', index, 'label', event.target.value)} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Label" />
                          <input value={item.value} onChange={(event) => handleGithubFieldChange('stats', index, 'value', event.target.value)} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Value" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">Pinned Repositories</h3>
                    <div className="mt-4 space-y-3">
                      {githubDraft.pinned.map((repo, index) => (
                        <div key={`repo-${index}`} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                          <div className="grid gap-3">
                            <input value={repo.title} onChange={(event) => handleGithubFieldChange('pinned', index, 'title', event.target.value)} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Repository title" />
                            <textarea rows="3" value={repo.description} onChange={(event) => handleGithubFieldChange('pinned', index, 'description', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Repository description" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white">
                    Save GitHub Section
                  </button>
                </form>
              </div>
            ) : null}

            {activeTab === 'Achievements' ? (
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <h2 className="text-xl font-semibold">Achievements</h2>
                <form onSubmit={handleAddAchievement} className="mt-6 grid gap-4 lg:grid-cols-2">
                  <label className="text-sm text-slate-300 lg:col-span-2">
                    <span className="mb-2 block">Achievement Title</span>
                    <input value={newAchievement.title} onChange={(event) => setNewAchievement((current) => ({ ...current, title: event.target.value }))} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                  <label className="text-sm text-slate-300 lg:col-span-2">
                    <span className="mb-2 block">Description</span>
                    <textarea rows="3" value={newAchievement.description} onChange={(event) => setNewAchievement((current) => ({ ...current, description: event.target.value }))} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                  <button type="submit" className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white">Add Achievement</button>
                </form>
                <div className="mt-6 space-y-3">
                  {(data.achievements || []).map((achievement, index) => (
                    <div key={`${achievement.title}-${index}`} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-white">{achievement.title}</p>
                          <p className="mt-2 text-sm text-slate-400">{achievement.description}</p>
                        </div>
                        <button type="button" onClick={() => handleDeleteAchievement(index)} className="rounded-full border border-rose-400/20 px-3 py-2 text-sm text-rose-300">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {activeTab === 'Appearance' ? (
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <h2 className="text-xl font-semibold">Appearance</h2>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Primary Color</span>
                    <input type="color" value={data.appearance.primaryColor} onChange={(event) => setAppearance({ primaryColor: event.target.value })} className="h-12 w-full rounded-2xl border border-white/10 bg-slate-900/70 p-1" />
                  </label>
                  <label className="text-sm text-slate-300">
                    <span className="mb-2 block">Background</span>
                    <input value={data.appearance.background} onChange={(event) => setAppearance({ background: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" />
                  </label>
                  <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                    <input type="checkbox" checked={data.appearance.animationsEnabled} onChange={(event) => setAppearance({ animationsEnabled: event.target.checked })} className="h-4 w-4 rounded border-white/20 bg-slate-900" />
                    Enable Animations
                  </label>
                  <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                    <input type="checkbox" checked={data.appearance.darkMode} onChange={(event) => setAppearance({ darkMode: event.target.checked })} className="h-4 w-4 rounded border-white/20 bg-slate-900" />
                    Dark Mode
                  </label>
                </div>
              </div>
            ) : null}

            {activeTab === 'Skills' ? (
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <h2 className="text-xl font-semibold">Skills</h2>
                <form onSubmit={handleAddSkill} className="mt-6 flex flex-col gap-3 md:flex-row">
                  <input value={newSkill} onChange={(event) => setNewSkill(event.target.value)} className="flex-1 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Add a skill" />
                  <button type="submit" className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white">Add Skill</button>
                </form>
                <div className="mt-6 space-y-3">
                  {data.skills.map((skill, index) => (
                    <div key={`${skill.name}-${index}`} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                      <span>{skill.name}</span>
                      <button type="button" onClick={() => handleDeleteSkill(index)} className="rounded-full border border-rose-400/20 px-3 py-2 text-sm text-rose-300">Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </main>
        </div>
      </div>
    </div>
  )
}
