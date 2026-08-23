import { useState } from 'react'
import { Award, BadgeCheck, ExternalLink, Shield, Trophy } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import CertificateViewer from './CertificateViewer.jsx'
import { certificationGroups, awards } from '../data/resumeData.js'

function CertificationCard({ name, logo, files, onOpen }) {
  const hasFiles = files?.length > 0

  return (
    <div
      className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl
                 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.04)]
                 hover:border-accent2 hover:shadow-[0_6px_16px_rgba(37,99,235,0.12)] hover:-translate-y-0.5
                 transition-all duration-200 cursor-pointer"
      onClick={() => hasFiles && onOpen({ name, files })}
      role={hasFiles ? 'button' : undefined}
      tabIndex={hasFiles ? 0 : undefined}
      onKeyDown={(e) => { if (hasFiles && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); onOpen({ name, files }); } }}
      aria-label={`View certificate: ${name}`}
    >
      {logo ? (
        <img src={logo} alt="" className="w-9 h-9 shrink-0 object-contain" />
      ) : (
        <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <Shield size={18} className="text-accent" />
        </div>
      )}
      <h3 className="font-display font-semibold text-ink text-sm md:text-base truncate" style={{ color: '#1a2332' }}>{name}</h3>
      {hasFiles && (
        <ExternalLink size={14} className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity text-accent2" aria-hidden="true" />
      )}
    </div>
  )
}

function AwardCard({ title, detail }) {
  return (
    <div className="p-5 bg-white border border-gray-200 rounded-xl
                 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.04)]
                 hover:border-accent2 hover:shadow-[0_6px_16px_rgba(37,99,235,0.12)] hover:-translate-y-0.5
                 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 flex items-center justify-center bg-accentSoft rounded-lg">
          <Trophy size={16} className="text-accent" />
        </div>
        <h3 className="font-display font-semibold text-ink text-sm" style={{ color: '#1a2332' }}>{title}</h3>
      </div>
      <p className="text-sm text-muted leading-relaxed" style={{ color: '#64748b' }}>{detail}</p>
    </div>
  )
}

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null)

  // Flatten all certifications with their group heading
  const allCerts = certificationGroups.flatMap((group) =>
    group.items.map((c) => ({ ...c, group: group.heading }))
  )

  return (
    <section id="certifications" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          index="04 — Credentials"
          title="Certifications & Awards"
          subtitle="Industry-validated expertise in cloud, ML, and data engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications column - stacked vertically */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-4 flex items-center gap-2">
              <BadgeCheck size={12} className="text-accent2" />
              Certifications
            </h4>
            {allCerts.map((cert, i) => (
              <Reveal key={`${cert.group}-${cert.name}`} delay={i * 0.04}>
                <CertificationCard
                  name={cert.name}
                  logo={cert.logo}
                  files={cert.files}
                  onOpen={setActiveCert}
                />
              </Reveal>
            ))}
          </div>

          {/* Recognition column - stacked vertically */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-4 flex items-center gap-2">
              <Trophy size={12} className="text-accent2" />
              Recognition
            </h4>
            {awards.map((award, i) => (
              <Reveal key={award.title} delay={i * 0.06}>
                <AwardCard title={award.title} detail={award.detail} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <CertificateViewer cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  )
}
