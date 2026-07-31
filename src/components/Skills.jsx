import SectionHeader from './SectionHeader'
import { skills } from '../utils/content'
import { motion } from 'framer-motion'
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaReact, FaServer, FaDatabase } from 'react-icons/fa'
import { SiGooglecloud, SiMysql, SiPostman } from 'react-icons/si'
import { FiCode } from 'react-icons/fi'

const icons = {
  languages: FaJava,
  frontend: FaReact,
  backend: FaServer,
  database: FaDatabase,
  cloud: SiGooglecloud,
  tools: FaGithub,
}

const skillIcons = {
  Python: FaPython,
  Java: FaJava,
  PHP: FaPhp,
  JavaScript: FaJs,
  SQL: FaDatabase,
  'C++': FaServer,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  React: FaReact,
  Bootstrap: FaBootstrap,
  'REST API': FaServer,
  Django: FaPython,
  'Node.js': FaServer,
  MySQL: SiMysql,
  'Google Cloud': SiGooglecloud,
  GitHub: FaGithub,
  'VS Code': FiCode,
  Postman: SiPostman,
  Git: FaGitAlt,
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <SectionHeader title="Skills" subtitle="Core stack" />
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(skills).map(([key, values]) => {
          const Icon = icons[key]
          return (
            <div key={key} className="group glass-panel rounded-[2rem] border border-white/10 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-primary/40 light:border-slate-200/20 light:bg-white/80">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">{formatTitle(key)}</h3>
              </div>
              <div className="mt-5 space-y-3">
                {values.map((item) => {
                  const SkillIcon = skillIcons[item] || FaServer
                  return (
                    <div key={item} className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 transition group-hover:border-brand-primary/30 light:border-slate-200/10 light:bg-slate-50/90 light:text-slate-900">
                      <span>{item}</span>
                      <SkillIcon className="text-brand-accent" />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}

function formatTitle(key) {
  if (key === 'frontend') return 'Frontend'
  if (key === 'backend') return 'Backend'
  if (key === 'database') return 'Database'
  if (key === 'cloud') return 'Cloud'
  if (key === 'tools') return 'Tools'
  return 'Languages'
}
