import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Award, Briefcase, CheckCircle2, Download, FileText, Github, Linkedin, LoaderCircle, Mail, MapPin, Menu, PartyPopper, Phone, Send, Sparkles, X } from 'lucide-react'
import CertificateViewer from './components/CertificateViewer.jsx'
import { awards, certificationGroups, education, experience, liveProjects, profile, skillGroups } from './data/resumeData.js'

const nav = [['work', 'Work'], ['expertise', 'Expertise'], ['credentials', 'Credentials'], ['contact', 'Contact']]
const impact = [['95%', 'PPE detection accuracy'], ['40+', 'HVAC fault scenarios'], ['30%', 'less retrieval effort'], ['10%', 'efficiency improvement']]

function Reveal({ children, className = '', delay = 0 }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: .12 }} transition={{ duration: .75, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}

function SectionTitle({ number, kicker, title, copy }) {
  return <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .65, ease: [.22, 1, .36, 1] }}><div><span>{number} / {kicker}</span><h2>{title}</h2></div>{copy && <p>{copy}</p>}</motion.div>
}

function Header({ onEmail }) {
  const [open, setOpen] = useState(false)
  return <motion.header className="topbar-wrap" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.22, 1, .36, 1] }}><div className="topbar">
    <a className="brand" href="#home" aria-label="Aariz Zafar home">AZ<span>.</span></a>
    <nav className="desktop-nav">{nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
    <button className="mini-cta" onClick={onEmail}>Let’s talk <ArrowUpRight size={15} /></button>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
  </div>{open && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }}>{nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</motion.nav>}</motion.header>
}

function Hero({ onEmail }) {
  return <section id="home" className="hero shell">
    <motion.div className="hero-copy soft-panel" initial={{ opacity: 0, x: -34 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .85, ease: [.22, 1, .36, 1] }}>
      <div className="availability"><i /> Available for ambitious AI teams</div>
      <p className="eyebrow">Machine Learning Engineer · Bangalore</p>
      <h1>Aariz<br /><em>Zafar.</em></h1>
      <h2 className="hero-statement">Building AI that works in the real world.</h2>
      <p className="hero-lede">I turn messy industrial data into dependable computer vision, predictive maintenance, and cloud AI products.</p>
      <div className="hero-actions"><a className="primary-button" href="#work">See my impact <ArrowDownRight size={18} /></a><button className="text-link" onClick={onEmail}>Email me <ArrowUpRight size={17} /></button></div>
    </motion.div>
    <motion.div className="hero-side" initial={{ opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .85, delay: .12, ease: [.22, 1, .36, 1] }}>
      <motion.div className="portrait" whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }}><img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Aariz Zafar" /><div className="portrait-caption"><span><MapPin size={14} /> {profile.location}</span><strong>1+ year building applied AI</strong></div></motion.div>
      <div className="impact-grid">{impact.map(([value, label], i) => <motion.div key={label} initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .35 + i * .07 }} whileHover={{ y: -4 }}><strong>{value}</strong><span>{label}</span></motion.div>)}</div>
    </motion.div>
  </section>
}

function Work() {
  return <section id="work" className="shell section"><SectionTitle number="01" kicker="Selected impact" title="Evidence, not buzzwords." copy="A recruiter-friendly view of the outcomes, systems, and environments behind my work." />
    <div className="timeline">{experience.map((job, i) => <Reveal key={job.company} className="job-card" delay={i * .06}>
      <div className="job-meta"><span className="job-number">0{i + 1}</span><div className="logo-well">{job.logo ? <img src={job.logo} alt="" /> : <Briefcase />}</div><div><p>{job.period}</p><span>{job.location}</span></div></div>
      <div className="job-body"><p className="job-company">{job.company}</p><h3>{job.role}</h3><ul>{job.points.map(point => <li key={point}><CheckCircle2 size={16} /> <span>{point}</span></li>)}</ul></div>
    </Reveal>)}</div>
  </section>
}

function Expertise() {
  return <section id="expertise" className="section section-tint"><div className="shell"><SectionTitle number="02" kicker="Expertise" title="One toolkit. End-to-end ownership." copy="From simulation and experimentation to production pipelines and cloud deployment." />
    <div className="skills-layout"><div className="skills-intro"><Sparkles size={28} /><h3>I work across the full AI lifecycle.</h3><p>{profile.summary}</p><div className="education"><span>Education</span><strong>{education.degree}</strong><p>{education.school} · {education.cgpa}</p></div></div>
      <div className="skill-cards">{skillGroups.map((group, i) => <Reveal key={group.category} className="skill-card" delay={(i % 4) * .04}><span>0{i + 1}</span><h3>{group.category}</h3><div>{group.skills.map(skill => <em key={skill}>{skill}</em>)}</div></Reveal>)}</div>
    </div></div></section>
}

function Projects() {
  return <section className="shell section"><SectionTitle number="03" kicker="Live lab" title="Try what I build." copy="Working deployments—not just screenshots or slide decks." />
    <div className="projects-grid">{liveProjects.map((project, i) => <Reveal key={project.name} className="project-card"><div><span>LIVE PROJECT / 0{i + 1}</span><h3>{project.name}</h3><p>{project.description}</p></div><a href={`microsoft-edge:${project.url}`} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} in Edge`}><ArrowUpRight /></a></Reveal>)}</div>
  </section>
}

function Credentials() {
  const [activeCert, setActiveCert] = useState(null)
  const [resumeOpen, setResumeOpen] = useState(false)
  const certs = certificationGroups.flatMap(group => group.items)
  return <section id="credentials" className="section section-tint"><div className="shell"><SectionTitle number="04" kicker="Credentials" title="Validated foundations." copy="Cloud, security, administration, and machine learning credentials backed by practical work." />
    <button className="resume-card" onClick={() => setResumeOpen(true)}><span className="resume-icon"><FileText size={26} /></span><span><small>Career document</small><strong>My Resume</strong><em>View experience, skills, and qualifications</em></span><ArrowUpRight /></button>
    <div className="credentials-layout"><div className="cert-list">{certs.map((cert, i) => <button key={cert.name} className="cert-row" onClick={() => cert.files?.length && setActiveCert(cert)}><span>{String(i + 1).padStart(2, '0')}</span><img src={cert.logo} alt="" /><strong>{cert.name}</strong><ArrowUpRight size={17} /></button>)}</div>
      <div className="awards-card"><Award size={28} /><p className="eyebrow">Recognition</p>{awards.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></div>)}</div></div>
    <CertificateViewer cert={activeCert} onClose={() => setActiveCert(null)} /><ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} /></div></section>
}

function ResumeViewer({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = event => event.key === 'Escape' && onClose()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey) }
  }, [open, onClose])
  const resumePath = `${import.meta.env.BASE_URL}artifacts/resume/AarizZafar_resume.pdf`
  return <AnimatePresence>{open && <motion.div className="resume-viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <button className="resume-backdrop" onClick={onClose} aria-label="Close resume viewer" />
    <motion.div className="resume-window" role="dialog" aria-modal="true" aria-label="Aariz Zafar resume" initial={{ opacity: 0, y: 24, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: .98 }} transition={{ type: 'spring', stiffness: 250, damping: 25 }}>
      <div className="resume-toolbar"><div><FileText size={20} /><span><small>Resume</small><strong>Aariz Zafar</strong></span></div><div><a href={resumePath} download="AarizZafar_resume.pdf"><Download size={17} /> Download</a><button onClick={onClose} aria-label="Close"><X size={19} /></button></div></div>
      <iframe src={`${resumePath}#toolbar=0&navpanes=0`} title="Aariz Zafar resume" />
    </motion.div>
  </motion.div>}</AnimatePresence>
}

function Contact({ onEmail }) {
  return <section id="contact" className="shell section"><div className="contact-card"><div><p className="eyebrow">05 / Let’s build something useful</p><h2>Have an AI problem<br />worth solving?</h2><p>Whether it’s computer vision, predictive maintenance, RAG, or cloud data engineering—I’d like to hear the hard version of the problem.</p></div>
    <div className="contact-actions"><button className="contact-primary" onClick={onEmail}><Mail /> {profile.email}</button><a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone /> {profile.phone}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a></div></div>
  </section>
}

function ContactModal({ open, onClose }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) return
    const onKey = event => event.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open, onClose])

  async function submit(event) {
    event.preventDefault()
    const formElement = event.currentTarget
    setStatus('sending')
    setError('')
    const form = new FormData(formElement)
    try {
      const response = await fetch('https://formspree.io/f/xwlezyqp', { method: 'POST', body: form, headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Message could not be sent.')
      setStatus('success')
      formElement.reset()
      window.setTimeout(() => { setStatus('idle'); onClose() }, 2600)
    } catch {
      setStatus('idle')
      setError('Something went wrong. Please try again or email Aariz directly.')
    }
  }

  return <AnimatePresence>{open && <motion.div className="message-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <button className="modal-backdrop" onClick={onClose} aria-label="Close message window" />
    <motion.div className="message-dialog" role="dialog" aria-modal="true" aria-labelledby="message-title" initial={{ opacity: 0, y: 30, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: .97 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }}>
      <button className="dialog-close" onClick={onClose} aria-label="Close"><X size={18} /></button>
      <AnimatePresence mode="wait">{status === 'success' ? <motion.div className="message-success" key="success" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
        <div className="celebration"><PartyPopper size={34} />{[0,1,2,3,4,5].map(i => <i key={i} style={{ '--i': i }} />)}</div><h2>Message launched!</h2><p>Thanks for reaching out. Aariz will get back to you soon.</p>
      </motion.div> : <motion.form key="form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <p className="eyebrow">Say hello</p><h2 id="message-title">Let’s start a conversation.</h2><p className="dialog-copy">Share a little about yourself and what you’d like to discuss.</p>
        <label>Your email<input type="email" name="email" placeholder="recruiter@company.com" required autoFocus /></label>
        <label>Your message<textarea name="message" placeholder="Hi Aariz, I’d like to talk about..." rows="6" required /></label>
        <input type="hidden" name="_subject" value="New portfolio message" />
        {error && <p className="form-error">{error}</p>}
        <button className="send-button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? <><LoaderCircle className="spin" size={18} /> Sending...</> : <>Send message <Send size={18} /></>}</button>
      </motion.form>}</AnimatePresence>
    </motion.div>
  </motion.div>}</AnimatePresence>
}

export default function App() {
  const [messageOpen, setMessageOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: .3 })
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -260])
  return <><motion.div className="scroll-progress" style={{ scaleX: progress }} /><div className="ambient" aria-hidden="true"><motion.i className="orb orb-one" style={{ y: orbY }} /><i className="orb orb-two" /></div><Header onEmail={() => setMessageOpen(true)} /><main><Hero onEmail={() => setMessageOpen(true)} /><Work /><Expertise /><Projects /><Credentials /><Contact onEmail={() => setMessageOpen(true)} /></main><footer className="shell footer"><span>© {new Date().getFullYear()} Aariz Zafar</span><span>Machine Learning · Computer Vision · Cloud AI</span></footer><ContactModal open={messageOpen} onClose={() => setMessageOpen(false)} /></>
}
