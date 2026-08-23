import { ExternalLink, Code } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { liveProjects } from '../data/resumeData.js'

function ProjectCard({ name, description, url, logo }) {
  return (
    <a
      href={`microsoft-edge:${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-xl
                 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.04)]
                 hover:border-accent2 hover:shadow-[0_6px_16px_rgba(37,99,235,0.12)] hover:-translate-y-0.5
                 transition-all duration-200"
      aria-label={`Open ${name} in Edge`}
    >
      <div className="flex items-center gap-3">
        {logo ? (
          <img src={logo} alt="" className="w-9 h-9 shrink-0 object-contain" />
        ) : (
          <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <Code size={18} className="text-accent" />
          </div>
        )}
        <h3 className="font-display font-semibold text-ink text-base" style={{ color: '#1a2332' }}>{name}</h3>
      </div>
      <p className="text-sm text-muted line-clamp-2" style={{ color: '#64748b' }}>{description}</p>
      <div className="flex items-center justify-end pt-1">
        <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity text-accent2" aria-hidden="true" />
      </div>
    </a>
  )
}

export default function LiveProjects() {
  return (
    <section id="live-projects" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          index="05 — Live"
          title="Live Projects"
          subtitle="Interactive deployments you can explore right now."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveProjects.map((proj, i) => (
            <Reveal key={proj.name} delay={i * 0.08}>
              <ProjectCard
                name={proj.name}
                description={proj.description}
                url={proj.url}
                logo={proj.logo}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
