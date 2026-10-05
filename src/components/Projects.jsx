const projects = [
  {
    title: 'NORSAL Restaurant',
    tag: 'Projet Full-Stack',
    description:
      "Application web complète pour un restaurant : présentation du menu, réservation de tables en ligne, et dashboard administrateur pour gérer les plats et les réservations.",
    features: [
      'Menu dynamique avec 24 plats',
      'Système de réservation de tables',
      'Dashboard administrateur',
      'Interface responsive',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/salahrif2020-code/norsal-restaurant',
    demo: null,
    featured: true,
  },
  {
    title: 'Rif Cars',
    tag: 'Projet de formation',
    description:
      "Application web de location de voitures développée dans le cadre de ma formation Web Full-Stack. Présentation des véhicules et interface de location intuitive.",
    features: [
      'Catalogue de véhicules',
      'Interface de location',
      'Design responsive',
    ],
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'ZIRI',
    tag: 'Projet créatif',
    description:
      "Site web moderne pour une marque streetwear inspirée de l'identité du Rif et d'Al Hoceima. Catalogue produits avec fonctionnalités e-commerce.",
    features: [
      'Catalogue de produits',
      'Filtres et recherche',
      'Panier et wishlist',
      'Authentification utilisateur',
    ],
    stack: ['React', 'JavaScript', 'CSS'],
    github: null,
    demo: null,
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            03 — Projets
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">
            Mes réalisations
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl">
            Une sélection de projets sur lesquels j'ai travaillé — du front-end au back-end,
            en passant par la base de données.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
                p.featured
                  ? 'border-accent/30 shadow-md'
                  : 'border-slate-100 dark:border-slate-800'
              }`}
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left: Content */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        p.featured
                          ? 'bg-accent/10 text-accent'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {p.tag}
                    </span>
                    {p.featured && (
                      <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                        ⭐ Projet principal
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-ink dark:text-white mb-3">
                    {p.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {p.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-ink hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Voir le code
                      </a>
                    )}
                    {p.demo ? (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accentDark text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        🔗 Démo en ligne
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm font-medium rounded-lg">
                        🚧 Démo bientôt disponible
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Stack */}
                <div className="md:col-span-1">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 h-full border border-slate-100 dark:border-slate-700">
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                      Stack technique
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-medium bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA GitHub */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/salahrif2020-code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Voir tous mes projets sur GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}