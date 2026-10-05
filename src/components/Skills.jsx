const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Vite', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'REST API', 'JWT Auth'],
  },
  {
    title: 'Bases de données',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Outils & DevOps',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Postman', 'Docker (notions)', 'SonarQube (notions)', 'Grafana (notions)'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            02 — Compétences
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mt-2">
            Stack technique
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl">
            Technologies que j'utilise dans mes projets — du prototype à la mise en production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">{g.icon}</div>
              <h3 className="font-bold text-ink dark:text-white mb-4">{g.title}</h3>
              <ul className="space-y-2">
                {g.skills.map((s) => (
                  <li key={s} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="text-accent mt-0.5">▸</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}