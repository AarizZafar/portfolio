import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { skillGroups } from '../data/resumeData.js'

const cardClass = "bg-white border border-gray-200 rounded-xl shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.04)] hover:border-accent2 hover:shadow-[0_6px_16px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-200"
const badgeClass = "px-3 py-1 text-xs font-medium text-ink bg-gray-100 border border-gray-200 rounded-full"

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          index="02 — Expertise"
          title="Skills & Technologies"
          subtitle="A multidisciplinary toolkit for end-to-end AI product development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className={`${cardClass} p-6 md:p-7 h-full`}>
                <h3 className="font-display text-ink font-bold mb-4 text-base">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span key={s} className={badgeClass}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
