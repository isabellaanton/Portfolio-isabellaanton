const CONTACT_LINKS = [
  {
    href: 'https://linkedin.com/in/isabella-anton',
    iconClass: 'icon-linkedin',
    name: 'LinkedIn',
    handle: 'linkedin.com/in/isabellaanton',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/isabellaanton',
    iconClass: 'icon-github',
    name: 'GitHub',
    handle: 'https://github.com/isabellaanton',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#E2E2F0">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    href: 'mailto:isabellaanton3@gmail.com',
    iconClass: 'icon-email',
    name: 'E-mail',
    handle: 'isabellaanton3@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contato" className="section-pad">
      <div className="container">
        <div className="reveal">
          <p className="section-label">// 04 · contato</p>
          <h2 className="section-title">Vamos <span>conversar</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-inner reveal">
          <p className="contact-lead">
            Estou ativamente buscando oportunidades de estágio ou emprego em TI. Se você
            tem uma vaga, um projeto interessante ou só quer trocar uma ideia sobre
            tecnologia — minha caixa de entrada está sempre aberta.
          </p>

          <div className="contact-links">
            {CONTACT_LINKS.map((link) => (
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="contact-link"
                key={link.name}
              >
                <div className={`contact-link-icon ${link.iconClass}`}>{link.icon}</div>
                <div className="contact-link-info">
                  <p className="contact-link-name">{link.name}</p>
                  <p className="contact-link-handle">{link.handle}</p>
                </div>
                <span className="contact-link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
