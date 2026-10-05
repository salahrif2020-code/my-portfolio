const contacts = [
  {
    label: 'Email',
    value: 'salah.rif2020@gmail.com',
    href: 'mailto:salah.rif2020@gmail.com',
    icon: '📧',
  },
  {
    label: 'GitHub',
    value: '@salahrif2020-code',
    href: 'https://github.com/salahrif2020-code',
    icon: '💻',
  },
  {
    label: 'LinkedIn',
    value: 'Salah Andaloussi',
    href: 'https://www.linkedin.com/in/salah-and-8a2879363',
    icon: '🔗',
  },
  {
    label: 'Localisation',
    value: 'Al Hoceima, Maroc',
    href: null,
    icon: '📍',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-ink text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          05 — Contact
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-5">
          Travaillons ensemble 🤝
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Je suis actuellement disponible pour un{' '}
          <strong className="text-white">stage</strong>, un{' '}
          <strong className="text-white">emploi junior</strong> ou une{' '}
          <strong className="text-white">Ausbildung en Allemagne</strong> dans le domaine
          du développement web. N'hésitez pas à me contacter !
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {contacts.map((c) =>
            c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur hover:bg-white/10 border border-white/10 rounded-xl p-5 text-left transition-all hover:-translate-y-1"
              >
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                  {c.label}
                </div>
                <div className="text-white font-medium text-sm group-hover:text-accent transition-colors truncate">
                  {c.value}
                </div>
              </a>
            ) : (
              <div
                key={c.label}
                className="bg-white/5 border border-white/10 rounded-xl p-5 text-left"
              >
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                  {c.label}
                </div>
                <div className="text-white font-medium text-sm">{c.value}</div>
              </div>
            )
          )}
        </div>

        <a
          href="mailto:salah.rif2020@gmail.com"
          className="inline-block px-8 py-4 bg-accent hover:bg-accentDark text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
        >
          ✉️ Envoyez-moi un message
        </a>
      </div>
    </section>
  )
}