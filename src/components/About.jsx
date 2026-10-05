export default function About() {
  const languages = [
    { name: 'Arabe', level: 'Langue maternelle', pct: 100 },
    { name: 'Français', level: 'B1', pct: 65 },
    { name: 'Anglais', level: 'B1', pct: 65 },
    { name: 'Allemand', level: 'B1 (en cours)', pct: 65 },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            01 — À propos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">
            Qui suis-je ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Je m'appelle <strong className="text-ink dark:text-white">Salah Eddin Andaloussi</strong>,
              développeur web full-stack junior basé à{' '}
              <strong className="text-ink dark:text-white">Al Hoceima, Maroc</strong>. Titulaire d'un{' '}
              <strong className="text-ink dark:text-white">DTS Développement Digital – Web Full Stack</strong>{' '}
              (ISTA Al Hoceima – OFPPT), je suis passionné par la création
              d'applications web modernes, performantes et accessibles.
            </p>
            <p>
              Mon parcours m'a permis de maîtriser l'ensemble de la chaîne de
              développement : de la conception d'interfaces React avec Tailwind CSS,
              jusqu'à la mise en place d'API REST avec Node.js, Express et MongoDB.
            </p>
            <p>
              Je suis actuellement à la recherche d'une{' '}
              <strong className="text-ink dark:text-white">opportunité professionnelle</strong> ou d'un{' '}
              <strong className="text-ink dark:text-white">stage</strong> au Maroc ou en Europe. À moyen
              terme, je souhaite poursuivre une{' '}
              <strong className="text-ink dark:text-white">Ausbildung en Allemagne</strong> dans le
              domaine informatique (Fachinformatiker).
            </p>
            <p className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Ouvert aux opportunités au Maroc et à l'international
              </span>
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-ink dark:text-white mb-6">🌍 Langues</h3>
            <div className="space-y-5">
              {languages.map((l) => (
                <div key={l.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-ink dark:text-white text-sm">{l.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{l.level}</span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-1000"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}