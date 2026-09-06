import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  X
} from 'lucide-react'
import CertificateViewer from './components/CertificateViewer.jsx'
import {
  awards,
  certificationGroups,
  education,
  experience,
  liveProjects,
  profile,
  skillGroups
} from './data/resumeData.js'

const navItems = [
  ['work', 'Work'],
  ['education', 'Education'],
  ['expertise', 'Expertise'],
  ['projects', 'Projects'],
  ['credentials', 'Credentials'],
  ['contact', 'Contact']
]

const impactStats = [
  ['15%', 'forecasting accuracy improvement'],
  ['10%', 'operational efficiency improvement'],
  ['30%', 'less retrieval effort']
]

const focusAreas = [
  ['Computer Vision', 'Industrial safety systems, visual preprocessing, detection workflows'],
  ['Predictive Maintenance', 'HVAC fault diagnosis, synthetic sensor data, anomaly detection'],
  ['Cloud AI', 'Azure, GCP']
]

const springHover = { type: 'spring', stiffness: 340, damping: 24 }

function ScrollBackground() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const gridY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['0px', '-180px'])
  const rulerY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['0px', '220px'])
  const diagonalY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['0px', '-120px'])
  const flowY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['0px', '140px'])
  const scanX = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['15vw', '15vw'] : ['-35vw', '100vw'])
  const mountainFarY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['24px', '-110px'])
  const mountainMidY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['58px', '-210px'])
  const mountainNearY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['96px', '-340px'])
  const mountainMistY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['40px', '-170px'])
  const mountainScale = useTransform(scrollYProgress, [0, 0.45, 1], reduceMotion ? [1, 1, 1] : [1.02, 1.08, 1.14])
  const mountainOpacity = useTransform(scrollYProgress, [0, 0.18, 0.7, 1], [0.78, 0.9, 0.74, 0.48])
  const mountainAsset = `${import.meta.env.BASE_URL}mountain-parallax.jpg`

  return (
    <div className="scroll-background" aria-hidden="true">
      <motion.div className="scroll-bg-grid" style={{ y: gridY }} />
      <motion.div className="scroll-bg-rulers" style={{ y: rulerY }} />
      <motion.div className="scroll-bg-diagonal" style={{ y: diagonalY }} />
      <motion.div className="mountain-parallax" style={{ scale: mountainScale, opacity: mountainOpacity }}>
        <motion.img className="mountain-layer mountain-layer-far" src={mountainAsset} alt="" decoding="async" style={{ y: mountainFarY }} />
        <motion.img className="mountain-layer mountain-layer-mid" src={mountainAsset} alt="" decoding="async" style={{ y: mountainMidY }} />
        <motion.img className="mountain-layer mountain-layer-near" src={mountainAsset} alt="" decoding="async" style={{ y: mountainNearY }} />
        <motion.div className="mountain-mist" style={{ y: mountainMistY }} />
      </motion.div>
      <motion.div className="scroll-bg-flow" style={{ y: flowY }} />
      <motion.div className="scroll-bg-scan" style={{ x: scanX }} />
    </div>
  )
}

function Reveal({ children, className = '', delay = 0, hover = false }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -6, scale: 1.015 } : undefined}
      viewport={{ once: true, amount: 0.16 }}
      transition={hover ? springHover : { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionTitle({ number, kicker, title, copy }) {
  return (
    <Reveal className="section-head">
      <div>
        <span>{number} / {kicker}</span>
        <h2>{title}</h2>
      </div>
      {copy && <p>{copy}</p>}
    </Reveal>
  )
}

function Header({ onEmail }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="topbar-wrap"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="topbar">
        <a className="brand" href="#home" aria-label="Aariz Zafar home">
          AZ
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <button className="mini-cta" onClick={onEmail}>
          <Mail size={16} />
          Contact
        </button>
        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function Hero({ onEmail }) {
  const heroRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const copyY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['0px', '-82px'])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.92, 0.62])
  const showcaseY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['0px', '-150px'])
  const showcaseScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 0.95])
  const statsY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['0px', '-54px'])
  const portraitX = useTransform(pointerX, [-1, 1], reduceMotion ? ['0px', '0px'] : ['14px', '-14px'])
  const portraitY = useTransform(pointerY, [-1, 1], reduceMotion ? ['0px', '0px'] : ['-10px', '10px'])
  const portraitRotateX = useTransform(pointerY, [-1, 1], reduceMotion ? ['0deg', '0deg'] : ['3deg', '-3deg'])
  const portraitRotateY = useTransform(pointerX, [-1, 1], reduceMotion ? ['0deg', '0deg'] : ['-4deg', '4deg'])

  function trackPointer(event) {
    if (reduceMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width * 2 - 1)
    pointerY.set((event.clientY - bounds.top) / bounds.height * 2 - 1)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section id="home" className="hero" ref={heroRef} onMouseMove={trackPointer} onMouseLeave={resetPointer}>
      <div className="shell hero-grid">
        <motion.div
          className="hero-copy"
          style={{ y: copyY, opacity: copyOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">{profile.title} / Bangalore, India</p>
            <h1>Aariz Zafar</h1>
            <p className="hero-statement">
              Machine learning engineer building computer vision, predictive maintenance, and cloud AI systems for industrial teams.
            </p>
            <div className="hero-actions">
              <motion.a
                className="primary-button"
                href="#work"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={springHover}
              >
                <ArrowDownRight size={18} />
                See impact
              </motion.a>
              <motion.button
                className="secondary-button"
                onClick={onEmail}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={springHover}
              >
                <Send size={17} />
                Start a conversation
              </motion.button>
            </div>
            <div className="hero-insights" aria-label="Current focus and experience">
              <div className="focus-card">
                <span>Current focus</span>
                <strong>AI Engineer at Trinity Mobility</strong>
                <p>Fault diagnosis, simulation data, and operational ML systems.</p>
              </div>
              <div className="experience-card">
                <span>Experience</span>
                <strong>1.5+</strong>
                <p>years of work experience building applied AI for industrial teams.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero-showcase"
          style={{ y: showcaseY, scale: showcaseScale }}
        >
          <motion.div
            className="portrait-panel"
            style={{ x: portraitX, y: portraitY, rotateX: portraitRotateX, rotateY: portraitRotateY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Aariz Zafar" fetchPriority="high" decoding="async" />
            <div className="portrait-caption">
              <span>
                <MapPin size={14} />
                {profile.location}
              </span>
              <strong>1.5+ years building applied AI across manufacturing, energy, and safety.</strong>
            </div>
          </motion.div>
        </motion.aside>
      </div>
      <motion.div className="shell stats-strip" aria-label="Selected outcomes" style={{ y: statsY }}>
        {impactStats.map(([value, label], index) => (
          <Reveal className="stat-tile" key={label} delay={index * 0.05}>
            <strong>{value}</strong>
            <span>{label}</span>
          </Reveal>
        ))}
      </motion.div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="section shell">
      <SectionTitle
        number="01"
        kicker="Selected impact"
        title="Evidence first, buzzwords last."
        copy="A concise view of the systems, outcomes, and environments behind the work."
      />
      <div className="timeline">
        {experience.map((job, index) => (
          <Reveal key={job.company} className="job-card" delay={index * 0.05}>
            <div className="job-meta">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div className="logo-well">
                {job.logo ? <img src={job.logo} alt="" loading="lazy" decoding="async" /> : <BriefcaseBusiness />}
              </div>
              <div>
                <strong>{job.company}</strong>
                <p>{job.period}</p>
                <small>{job.location}</small>
              </div>
            </div>
            <div className="job-body">
              <h3>{job.role}</h3>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={17} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="shell">
        <SectionTitle
          number="02"
          kicker="Education"
          title="Academic foundation."
          copy="Computer Science fundamentals with a strong applied AI and engineering focus."
        />
        <Reveal className="education-card">
          <div>
            <span>Vellore Institute of Technology AP</span>
            <h3>{education.degree}</h3>
            <p>CGPA: {education.cgpa}</p>
          </div>
          <strong>{education.year}</strong>
        </Reveal>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section id="expertise" className="section expertise-section">
      <div className="shell">
        <SectionTitle
          number="03"
          kicker="Expertise"
          title="Full-stack AI execution."
          copy="From data generation and model training to retrieval systems, deployment, and cloud operations."
        />
        <div className="expertise-grid">
          <Reveal className="expertise-lead" hover>
            <motion.span
              className="expertise-icon"
              animate={{ y: [0, -6, 0], rotate: [0, 6, -4, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <BrainCircuit size={30} />
            </motion.span>
            <h3>I turn messy industrial data into working AI products.</h3>
          </Reveal>
          <div className="focus-stack">
            {focusAreas.map(([title, copy], index) => (
              <Reveal className="focus-row" key={title} delay={index * 0.05} hover>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="skill-cards">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} className="skill-card" delay={(index % 4) * 0.04} hover>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{group.category}</h3>
              <div>
                {group.skills.map((skill) => (
                  <em key={skill}>{skill}</em>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section shell">
      <SectionTitle
        number="04"
        kicker="Live lab"
        title="Working demos"
        copy="Small but real deployments that show how I think about language models, tokenization, and usable AI tools."
      />
      <Reveal className="deployment-stack">
        <span>Deployment stack</span>
        <p>These projects are deployed across Azure VM, Azure Container Registry, Azure App Service, and Azure Static Web Apps.</p>
      </Reveal>
      <div className="projects-grid">
        {liveProjects.map((project, index) => (
          <Reveal key={project.name} className="project-card-shell" delay={index * 0.08}>
            <motion.article
              className="project-card"
              whileHover={{ y: -8, scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              transition={springHover}
            >
              <div>
                <span>LIVE PROJECT / {String(index + 1).padStart(2, '0')}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name}`}
                whileHover={{ rotate: 8, scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                transition={springHover}
              >
                <ExternalLink size={21} />
              </motion.a>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Credentials() {
  const [activeCert, setActiveCert] = useState(null)
  const [activeAward, setActiveAward] = useState(null)
  const [resumeOpen, setResumeOpen] = useState(false)
  const certs = useMemo(() => certificationGroups.flatMap((group) => group.items), [])

  return (
    <section id="credentials" className="section credentials-section">
      <div className="shell">
        <SectionTitle
          number="05"
          kicker="Credentials"
          title="Validated foundations."
          copy="Cloud, security, administration, and machine learning credentials backed by practical work."
        />
        <div className="credentials-layout">
          <motion.button
            className="resume-card"
            onClick={() => setResumeOpen(true)}
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            transition={springHover}
          >
            <span className="resume-icon">
              <FileText size={28} />
            </span>
            <span>
              <small>Career document</small>
              <strong>Resume</strong>
              <em>Experience, skills, and qualifications</em>
            </span>
            <ArrowUpRight size={22} />
          </motion.button>
          <div className="cert-list">
            {certs.map((cert, index) => (
              <motion.button
                key={cert.name}
                className="cert-row"
                onClick={() => cert.files?.length && setActiveCert(cert)}
                whileHover={{ x: 6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={springHover}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <img src={cert.logo} alt="" loading="lazy" decoding="async" />
                <strong>{cert.name}</strong>
                <ArrowUpRight size={17} />
              </motion.button>
            ))}
          </div>
          <div className="awards-card">
            <Award size={28} />
            <p className="eyebrow">Recognition</p>
            {awards.map((item) => (
              <article key={item.title} className="award-item">
                {item.files?.length ? (
                  <button className="award-open" onClick={() => setActiveAward(item)}>
                    <span>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </span>
                    <ArrowUpRight size={17} />
                  </button>
                ) : (
                  <>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </>
                )}
                {item.link && (
                  <a className="award-link" href={item.link} target="_blank" rel="noreferrer">
                    <ExternalLink size={15} />
                    LivNSense post
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
        <CertificateViewer cert={activeCert} onClose={() => setActiveCert(null)} />
        <CertificateViewer cert={activeAward} onClose={() => setActiveAward(null)} />
        <ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </section>
  )
}

function ResumeViewer({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && onClose()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const resumePath = `${import.meta.env.BASE_URL}artifacts/resume/AarizZafar_resume.pdf`

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="resume-viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="resume-backdrop" onClick={onClose} aria-label="Close resume viewer" />
          <motion.div
            className="resume-window"
            role="dialog"
            aria-modal="true"
            aria-label="Aariz Zafar resume"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
          >
            <div className="resume-toolbar">
              <div>
                <FileText size={20} />
                <span>
                  <small>Resume</small>
                  <strong>Aariz Zafar</strong>
                </span>
              </div>
              <div>
                <a href={resumePath} download="AarizZafar_resume.pdf">
                  <Download size={17} />
                  Download
                </a>
                <button onClick={onClose} aria-label="Close">
                  <X size={19} />
                </button>
              </div>
            </div>
            <iframe src={`${resumePath}#toolbar=0&navpanes=0`} title="Aariz Zafar resume" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Contact({ onEmail }) {
  return (
    <section id="contact" className="section shell">
      <div className="contact-band">
        <div>
          <p className="eyebrow">06 / Let's build something useful</p>
          <h2>Have an AI problem worth solving?</h2>
          <p>
            Let's collaborate to solve the hard version of the problem with practical AI systems.
          </p>
        </div>
        <div className="contact-actions">
          <button className="contact-primary" onClick={onEmail}>
            <Mail size={18} />
            {profile.email}
          </button>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            <Phone size={18} />
            {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactModal({ open, onClose }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && onClose()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  async function submit(event) {
    event.preventDefault()
    const formElement = event.currentTarget
    setStatus('sending')
    setError('')

    try {
      const form = new FormData(formElement)
      const response = await fetch('https://formspree.io/f/xwlezyqp', {
        method: 'POST',
        body: form,
        headers: { Accept: 'application/json' }
      })
      if (!response.ok) throw new Error('Message could not be sent.')
      setStatus('success')
      formElement.reset()
      window.setTimeout(() => {
        setStatus('idle')
        onClose()
      }, 2300)
    } catch {
      setStatus('idle')
      setError('Something went wrong. Please try again or email Aariz directly.')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="message-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="modal-backdrop" onClick={onClose} aria-label="Close message window" />
          <motion.div
            className="message-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="message-title"
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <button className="dialog-close" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  className="message-success"
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ShieldCheck size={44} />
                  <h2>Message sent.</h2>
                  <p>Thanks for reaching out. Aariz will get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p className="eyebrow">Say hello</p>
                  <h2 id="message-title">Let's start a conversation.</h2>
                  <p className="dialog-copy">Share a little about yourself and what you would like to discuss.</p>
                  <label>
                    Your email
                    <input type="email" name="email" placeholder="recruiter@company.com" required autoFocus />
                  </label>
                  <label>
                    Your message
                    <textarea name="message" placeholder="Hi Aariz, I would like to talk about..." rows="6" required />
                  </label>
                  <input type="hidden" name="_subject" value="New portfolio message" />
                  {error && <p className="form-error">{error}</p>}
                  <button className="send-button" type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <>
                        <LoaderCircle className="spin" size={18} />
                        Sending
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const [messageOpen, setMessageOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 })

  return (
    <>
      <ScrollBackground />
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Header onEmail={() => setMessageOpen(true)} />
      <main>
        <Hero onEmail={() => setMessageOpen(true)} />
        <Work />
        <Education />
        <Expertise />
        <Projects />
        <Credentials />
        <Contact onEmail={() => setMessageOpen(true)} />
      </main>
      <footer className="shell footer">
        <span>© {new Date().getFullYear()} Aariz Zafar</span>
        <span>Machine Learning / Computer Vision / Cloud AI</span>
      </footer>
      <ContactModal open={messageOpen} onClose={() => setMessageOpen(false)} />
    </>
  )
}
