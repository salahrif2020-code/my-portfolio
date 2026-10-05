export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 py-8 px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">Salah Eddin Andaloussi</span>
          <span className="text-slate-600">•</span>
          <span>Full-Stack Developer</span>
        </div>

        <div className="text-center md:text-right">
          © {year} — Conçu et développé avec{' '}
          <span className="text-accent">React</span> +{' '}
          <span className="text-accent">Tailwind</span> ❤️
        </div>
      </div>
    </footer>
  )
}