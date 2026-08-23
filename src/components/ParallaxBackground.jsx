import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function useParallax(speed = 0.5) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [speed * 80, speed * -80])
  return { ref, y }
}

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-corporate-gradient">
      <motion.div
        style={{ y: y1 }}
        className="parallax-layer absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-50"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/25 to-accent2/15 blur-3xl shadow-neu-lg" />
      </motion.div>

      <motion.div
        style={{ y: y2, rotate }}
        className="parallax-layer absolute top-1/3 -left-48 w-[400px] h-[400px] rounded-[3rem] opacity-40"
      >
        <div className="w-full h-full rounded-[3rem] skeu-recessed shadow-neu-inset-lg" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="parallax-layer absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full opacity-35"
      >
        <div className="w-full h-full rounded-full skeu-card shadow-neu-xl" />
      </motion.div>

      <motion.div
        style={{ y: y4 }}
        className="parallax-layer absolute top-2/3 left-1/3 w-24 h-24 rounded-2xl opacity-30 skeu-card shadow-neu-md"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_50%)]" />
    </div>
  )
}
