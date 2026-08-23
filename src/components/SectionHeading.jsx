import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, title, subtitle }) {
  return (
    <Reveal>
      <div className="mb-9 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-blue-200/60 pb-6">
        <div>
          <span className="corporate-label">{index}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-ink mt-3 tracking-tight">{title}</h2>
        </div>
        {subtitle && <p className="text-sm md:text-base max-w-xl md:text-right leading-relaxed" style={{ color: '#64748b' }}>{subtitle}</p>}
      </div>
    </Reveal>
  )
}
