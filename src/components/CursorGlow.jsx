import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden md:block">
      <div
        className="absolute h-72 w-72 rounded-full bg-brand-primary/20 blur-[120px]"
        style={{ transform: `translate(${position.x - 144}px, ${position.y - 144}px)` }}
      />
      <div
        className="absolute h-40 w-40 rounded-full bg-brand-accent/20 blur-[100px]"
        style={{ transform: `translate(${position.x - 80}px, ${position.y - 80}px)` }}
      />
    </div>
  )
}
