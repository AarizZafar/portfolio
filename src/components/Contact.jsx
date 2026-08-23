import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { profile } from '../data/resumeData.js'

const links = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Github, label: 'GitHub', value: 'AarizZafar', href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'aariz-zafar', href: profile.linkedin }
]

const cardClass = "bg-white border border-gray-200 rounded-xl shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.04)] hover:border-accent2 hover:shadow-[0_6px_16px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 transition-all duration-200"
const iconWrapper = "w-12 h-12 flex items-center justify-center bg-accentSoft rounded-lg"
const btnClass = "inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-accent2 rounded-full hover:bg-accent hover:shadow-[0_4px_12px_rgba(37,99,235,0.3)] transition-all duration-200"

export default function Contact() {
  return (
    <section id="contact" className="section-pad max-w-7xl mx-auto px-5 md:px-8">
      <SectionHeading
        index="06 — Connect"
        title="Let's Work Together"
        subtitle="Open to opportunities in Machine Learning, Computer Vision, and Cloud AI."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <Reveal className="md:col-span-5">
          <div className={`${cardClass} p-8 md:p-10 h-full flex flex-col justify-center`}>
            <div className={iconWrapper}>
              <Send size={22} className="text-accent2" />
            </div>
            <h3 className="font-display text-2xl font-bold text-ink mb-3">
              Ready to collaborate?
            </h3>
            <p className="text-muted mb-6" style={{ color: '#64748b' }}>
              I usually respond within a day. Whether it's a full-time role, consulting project,
              or technical discussion — I'd love to hear from you.
            </p>
            <a href={`mailto:${profile.email}`} className={btnClass}>
              Send an email
            </a>
          </div>
        </Reveal>

        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.08}>
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`${cardClass} p-6 flex flex-col gap-4 h-full`}
              >
                <div className={iconWrapper}>
                  <l.icon className="text-accent2" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted font-semibold uppercase tracking-wider">{l.label}</p>
                  <p className="text-sm text-ink font-semibold mt-1 break-all">{l.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
