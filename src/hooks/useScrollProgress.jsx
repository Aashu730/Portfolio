import { useEffect, useState } from 'react'

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setProgress(Math.min(Math.max(value, 0), 100))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return progress
}
