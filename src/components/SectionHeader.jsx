export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.28em] text-brand-accent">{subtitle}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">{title}</h2>
    </div>
  )
}
