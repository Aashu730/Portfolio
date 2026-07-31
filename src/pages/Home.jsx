import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Research from '../components/Research'
import Certifications from '../components/Certifications'
import Achievements from '../components/Achievements'
import GithubSection from '../components/GithubSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 light:bg-slate-50 light:text-slate-950">
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10 pt-28">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Research />
        <Education />
        <Certifications />
        <Achievements />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
