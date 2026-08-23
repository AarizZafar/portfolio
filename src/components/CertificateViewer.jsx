import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

function isImage(src) {
  return /\.(png|jpe?g|webp|gif)$/i.test(src)
}

function FilePane({ file, dual }) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        dual ? 'min-h-[55vh] lg:min-h-0 lg:h-full' : 'h-full min-h-0'
      }`}
    >
      {file.label && (
        <p className="text-xs font-semibold uppercase tracking-wider text-white/70 px-1 shrink-0">
          {file.label}
        </p>
      )}
      <div className="flex-1 min-h-0 rounded-xl overflow-hidden bg-white/95 shadow-2xl">
        {isImage(file.src) ? (
          <img
            src={file.src}
            alt={file.label || 'Certificate'}
            className="w-full h-full object-contain"
          />
        ) : (
          <iframe
            src={`${file.src}#toolbar=0&navpanes=0`}
            title={file.label || 'Certificate'}
            className="w-full h-full border-0"
          />
        )}
      </div>
    </div>
  )
}

export default function CertificateViewer({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [cert, onClose])

  return createPortal(
    <AnimatePresence>
      {cert && (
        <motion.div
          key={cert.name}
          className="fixed inset-0 z-[100] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close certificate viewer"
            className="absolute inset-0 bg-slate-900/55 backdrop-blur-md cursor-default"
            onClick={onClose}
          />

          <div className="relative z-10 flex items-center gap-3 px-4 sm:px-6 py-4 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-sm transition-colors"
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <h2 className="text-sm sm:text-base font-semibold text-white/95 truncate">
              {cert.name}
            </h2>
          </div>

          <motion.div
            className={`relative z-10 flex-1 min-h-0 px-3 sm:px-6 pb-4 sm:pb-6 overflow-y-auto lg:overflow-hidden grid gap-3 sm:gap-4 ${
              cert.files.length > 1
                ? 'grid-cols-1 lg:grid-cols-2'
                : 'grid-cols-1 max-w-5xl mx-auto w-full'
            }`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {cert.files.map((file) => (
              <FilePane key={file.src} file={file} dual={cert.files.length > 1} />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
