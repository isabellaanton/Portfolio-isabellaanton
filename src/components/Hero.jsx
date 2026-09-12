export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot"></span>
          Disponível para estágio/emprego · Fortaleza, CE
        </div>

        <h1 className="hero-name">
          Isabella Anton<span className="hero-cursor"></span>
        </h1>

        <p className="hero-tagline">
          Construindo o futuro, <strong>uma linha de código por vez.</strong>
        </p>

        <p className="hero-sub">
          <span>Ciência da Computação</span>
          <span className="hero-sub-sep"></span>
          <span>UNIFOR · 4º Semestre</span>
          <span className="hero-sub-sep"></span>
          <span>Fortaleza, CE</span>
        </p>

        <div className="hero-actions">
          <a href="/Curriculo_Isabella_Anton.pdf" download className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar CV
          </a>
          <a href="mailto:isabellaanton3@gmail.com" className="btn btn-ghost">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  )
}
