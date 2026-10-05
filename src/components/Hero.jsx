export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
      {/* Gradient blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-300/20 dark:bg-sky-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-center">
        {/* Left: Text */}
        <div className="md:col-span-3 fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-5">
            Disponible pour stage / emploi — Maroc & Europe
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-ink dark:text-white leading-tight mb-5">
            Bonjour, je suis{' '}
            <span className="text-accent">Salah Eddin</span> 👋
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-semibold mb-6">
            Développeur Web Full-Stack Junior
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Diplômé DTS <strong className="text-ink dark:text-white">Développement Digital – Web Full Stack</strong> à Al Hoceima.
            Je conçois des applications web modernes avec <strong className="text-ink dark:text-white">React</strong>,{' '}
            <strong className="text-ink dark:text-white">Node.js</strong> et <strong className="text-ink dark:text-white">MongoDB</strong>.
            Passionné par le code propre et les interfaces intuitives.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent hover:bg-accentDark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Voir mes projets
            </a>
            <a
              href="/cv.pdf"
              download="CV-Salah-Eddin-Andaloussi.pdf"
              className="px-6 py-3 bg-ink dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-200 text-white dark:text-ink font-semibold rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger mon CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-ink/10 dark:border-white/20 hover:border-accent text-ink dark:text-white hover:text-accent font-semibold rounded-lg transition-all"
            >
              Me contacter
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div>
              <div className="text-2xl font-extrabold text-ink dark:text-white">3+</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Projets réalisés</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-ink dark:text-white">Bac+2</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">DTS Web Full-Stack</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-ink dark:text-white">4</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Langues parlées</div>
            </div>
          </div>
        </div>

        {/* Right: Photo + Code card */}
        <div className="md:col-span-2 fade-up">
          {/* Photo */}
          <div className="relative mb-6 mx-auto w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-sky-400 rounded-full blur-xl opacity-30" />
            <img
              src="/profile.jpg"
              alt="Salah Eddin Andaloussi"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
            />
            {/* Status badge */}
            <div className="absolute bottom-2 right-2 bg-white dark:bg-slate-800 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2 border border-slate-100 dark:border-slate-700">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-ink dark:text-white">Disponible</span>
            </div>
          </div>

          {/* Code card */}
          <div className="bg-ink dark:bg-slate-900 rounded-2xl shadow-2xl p-1 rotate-1 hover:rotate-0 transition-transform duration-500 border border-slate-800 hidden md:block">
            <div className="bg-slate-900 rounded-xl p-4">
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <pre className="text-xs leading-relaxed font-mono">
                <code>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-sky-300">dev</span>{' '}
                  <span className="text-slate-400">=</span> {'{'}
                  {'\n'}  <span className="text-emerald-300">nom</span>:{' '}
                  <span className="text-orange-300">"Salah Eddin"</span>,
                  {'\n'}  <span className="text-emerald-300">role</span>:{' '}
                  <span className="text-orange-300">"Full-Stack"</span>,
                  {'\n'}  <span className="text-emerald-300">stack</span>: [
                  <span className="text-orange-300">"React"</span>,{' '}
                  <span className="text-orange-300">"Node"</span>],
                  {'\n'}  <span className="text-emerald-300">location</span>:{' '}
                  <span className="text-orange-300">"Al Hoceima 🇲🇦"</span>,
                  {'\n'}  <span className="text-emerald-300">openTo</span>:{' '}
                  <span className="text-orange-300">"Ausbildung 🇩🇪"</span>
                  {'\n'}{'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}