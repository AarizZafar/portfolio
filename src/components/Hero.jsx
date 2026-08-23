import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/resumeData.js'
import Reveal from './Reveal.jsx'

const proof = [
  { value: '95%', label: 'PPE detection accuracy' },
  { value: '40+', label: 'Fault scenarios modelled' },
  { value: '30%', label: 'Faster knowledge retrieval' }
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          <Reveal className="lg:col-span-8">
            <div className="hero-panel h-full p-7 sm:p-10 lg:p-14 flex flex-col justify-between min-h-[560px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/80 border border-blue-100 px-3 py-1.5 text-xs font-bold text-accent tracking-wide">
                  <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" /><span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" /></span>
                  OPEN TO HIGH-IMPACT AI ROLES
                </div>
                <p className="mt-9 text-sm font-bold uppercase tracking-[0.22em] text-accent2">{profile.title}</p>
                <h1 className="mt-4 font-display text-[clamp(3.4rem,8vw,7.5rem)] font-extrabold tracking-[-0.065em] leading-[0.86] text-ink">
                  Aariz<br />Zafar<span className="text-accent2">.</span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink2">
                  I build AI systems that move beyond notebooks—turning industrial data into <span className="font-semibold text-accent">measurable operational impact.</span>
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
                <a href="#experience" className="action-primary">Explore my impact <ArrowDown size={17} /></a>
                <a href="#contact" className="action-secondary">Start a conversation <ArrowUpRight size={17} /></a>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-6">
            <Reveal delay={0.08} className="col-span-2 lg:col-span-1">
              <div className="portrait-card relative overflow-hidden min-h-[360px] lg:h-[390px]">
                <img src="/profile.jpg" alt={profile.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b3a]/85 via-transparent to-blue-100/10" />
                <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between text-white">
                  <div><p className="text-xs uppercase tracking-widest text-blue-100/75">Based in</p><p className="mt-1 font-semibold flex items-center gap-1.5"><MapPin size={14} /> {profile.location}</p></div>
                  <div className="h-11 w-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center"><BriefcaseBusiness size={19} /></div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14} className="col-span-2 lg:col-span-1">
              <div className="proof-panel grid grid-cols-3 gap-2 p-4">
                {proof.map((item) => <div key={item.label} className="text-center px-2 py-3"><p className="font-display text-2xl lg:text-xl xl:text-2xl font-extrabold text-accent2">{item.value}</p><p className="mt-1 text-[10px] leading-tight font-semibold text-muted">{item.label}</p></div>)}
              </div>
            </Reveal>

            <Reveal delay={0.2} className="col-span-2 lg:col-span-1">
              <div className="social-panel flex items-center justify-between p-4 pl-5">
                <p className="text-sm font-semibold text-ink">Find my work</p>
                <div className="flex gap-2">
                  {[{ icon: Github, href: profile.github, label: 'GitHub' }, { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' }, { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' }].map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="social-button"><Icon size={17} /></a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <motion.a href="#about" animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="hidden lg:flex mt-8 mx-auto h-10 w-10 items-center justify-center rounded-full text-accent2" aria-label="Scroll to about"><ArrowDown size={20} /></motion.a>
      </div>
    </section>
  )
}
