import { Briefcase, Building2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { experience } from '../data/resumeData.js'

function JobCard({ job }) {
  return (
    <div className="group relative p-6 md:p-8 bg-white border border-gray-200 rounded-xl
                 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.04)]
                 hover:border-accent2 hover:shadow-[0_6px_16px_rgba(37,99,235,0.12)] hover:-translate-y-0.5
                 transition-all duration-200">
      {/* Timeline dot */}
      <span className="absolute -left-6 top-8 w-3 h-3 rounded-full bg-accent2 border-4 border-white shadow-[0_0_0_1px_rgba(37,99,235,0.3)]" aria-hidden="true" />

      <div className="flex flex-col md:flex-row md:items-start gap-5">
        <div className="shrink-0">
          {job.logo ? (
            <div className="company-logo-plate" title={job.company}>
              <img src={job.logo} alt={`${job.company} logo`} />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
              <Building2 size={22} className="text-accent2" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
            <h3 className="font-display text-lg md:text-xl text-ink font-bold">
              {job.role}
              <span className="text-accent2 font-semibold"> · {job.company}</span>
            </h3>
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-accent2 bg-accentSoft rounded-full">
              {job.period}
            </span>
          </div>
          <p className="text-sm text-muted mb-5 flex items-center gap-1.5">
            <Briefcase size={13} className="text-accent" />
            {job.location}
          </p>

          <ul className="space-y-3 text-sm md:text-base text-ink leading-relaxed list-disc list-inside" style={{ color: '#1a2332' }}>
            {job.points.map((pt, idx) => (
              <li key={idx}>{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad max-w-7xl mx-auto px-5 md:px-8 relative">
      <SectionHeading
        index="03 — Career"
        title="Work Experience"
        subtitle="Delivering AI solutions across industrial automation, HVAC, and enterprise systems."
      />

      <div className="space-y-8 pl-6 border-l border-gray-200">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1}>
            <JobCard job={job} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
