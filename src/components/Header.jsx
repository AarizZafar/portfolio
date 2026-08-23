import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-4 md:px-8 pt-4"
    >
      <div
        className={`max-w-7xl mx-auto h-14 md:h-16 flex items-center justify-between px-3 md:px-4 rounded-2xl transition-all duration-300 nav-shell ${
          scrolled ? 'shadow-neu-lg bg-surface/95 backdrop-blur-md' : 'shadow-neu bg-surface/80 backdrop-blur-sm'
        }`}
      >
        <a href="#home" aria-label="Home" className="h-10 w-10 rounded-xl bg-accent2 text-white font-display font-extrabold flex items-center justify-center shadow-[0_8px_20px_rgba(37,99,235,0.28)]">
          AZ
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-ink2 px-4 py-2 rounded-xl hover:bg-blue-50 hover:text-accent transition-all duration-200 font-semibold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex neu-btn-primary text-xs">
          Let’s talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden skeu-icon-well p-2 text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="md:hidden max-w-7xl mx-auto mt-2 overflow-hidden rounded-2xl shadow-neu-lg skeu-card"
          >
            <div className="flex flex-col p-4 gap-1 relative z-[1]">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-ink2 hover:text-accent px-4 py-3 rounded-xl hover:shadow-neu-inset-sm transition-all font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="neu-btn-primary text-center mt-2"
              >
                Hire Me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
