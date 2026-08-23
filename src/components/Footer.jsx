import { profile } from '../data/resumeData.js'

export default function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
          <p className="font-medium text-ink2">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-xs tracking-wide">
            React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
