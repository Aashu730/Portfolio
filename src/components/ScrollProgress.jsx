import useScrollProgress from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="scroll-progress">
      <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  )
}
