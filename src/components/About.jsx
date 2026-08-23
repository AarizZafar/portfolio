import { GraduationCap, MapPin, Sparkles } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { useParallax } from './ParallaxBackground.jsx'
import { profile, education } from '../data/resumeData.js'
import { motion } from 'framer-motion'

const cardClass = "bg-white border border-gray-200 rounded-xl shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.04)] hover:border-accent2 hover:shadow-[0_6px_16px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-200"

const iconWrapper = "w-10 h-10 flex items-center justify-center bg-accentSoft rounded-lg"

export default function About() {
  const { ref, y } = useParallax(0.3)

  return (
    <section id="about" className="section-pad max-w-7xl mx-auto px-5 md:px-8 relative">
      <SectionHeading
        index="01 — About"
        title="Building Intelligent Systems"
        subtitle="Bridging classical ML, deep learning, and cloud engineering into deployable products."
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <Reveal className="md:col-span-8">
          <div className={`${cardClass} p-8 md:p-10 h-full`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={iconWrapper}>
                <Sparkles size={18} className="text-accent2" />
              </div>
              <h3 className="font-display font-bold text-ink text-lg">Professional Summary</h3>
            </div>
            <p className="text-base md:text-lg text-ink leading-relaxed" style={{ color: '#1a2332' }}>{profile.summary}</p>
            <p className="mt-5 text-muted leading-relaxed" style={{ color: '#64748b' }}>
              My work spans predictive maintenance for industrial HVAC systems, physics-based
              synthetic data generation, computer vision for factory safety compliance, and
              retrieval-augmented generation systems — bridging classical ML, deep learning, and
              large-scale cloud data engineering into deployable products.
            </p>
          </div>
        </Reveal>

        <motion.div style={{ y }} className="md:col-span-4 space-y-5">
          <Reveal delay={0.1}>
            <div className={`${cardClass} p-6`}>
              <div className="flex items-start gap-4">
                <div className={iconWrapper}>
                  <MapPin className="text-accent2" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-ink font-semibold mt-1">{profile.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className={`${cardClass} p-6`}>
              <div className="flex items-start gap-4">
                <div className={iconWrapper}>
                  <GraduationCap className="text-accent2" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted font-semibold uppercase tracking-wider">Education</p>
                  <p className="text-ink font-semibold mt-1 text-sm leading-snug">{education.degree}</p>
                  <p className="text-muted text-sm mt-2">{education.school}</p>
                  <p className="text-muted text-sm">CGPA {education.cgpa} · {education.year}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  )
}
