const timeline = [
  {
    year: '2026',
    title: 'DTS Développement Digital — Web Full Stack',
    place: 'ISTA Al Hoceima — OFPPT',
    description:
      "Formation Bac+2 complète couvrant le front-end (HTML, CSS, JavaScript, React), le back-end (Node.js, Express, PHP, Laravel), les bases de données (MySQL, MongoDB) et les bonnes pratiques DevOps.",
    badge: 'Diplôme',
  },
  {
    year: '2026',
    title: 'Stage — NORSAL',
    place: 'Al Hoceima, Maroc',
    description:
      "Stage pratique en entreprise : gestion et traitement des factures, saisie et vérification de données, tâches administratives et gestion documentaire.",
    badge: 'Expérience',
  },
  {
    year: '2023',
    title: 'Baccalauréat — Sciences Physiques',
    place: 'Maroc',
    description:
      "Baccalauréat scientifique, socle solide en mathématiques et en raisonnement analytique.",
    badge: 'Diplôme',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            04 — Formation & Expérience
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">
            Mon parcours
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-accent border-4 border-white dark:border-slate-950 shadow-md md:-translate-x-1/2 z-10" />

                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div
                    className={`bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow ${
                      i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent">
                        {item.year}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-ink dark:text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-accent mb-3">{item.place}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}