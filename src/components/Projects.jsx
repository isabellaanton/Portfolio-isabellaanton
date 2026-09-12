const DemoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const PROJECTS = [
  {
    meta: 'UNIFOR · Projeto Full-Stack',
    title: 'ZeroDesperdicio',
    desc: 'Aplicativo que conecta doadores e receptores de alimentos, combatendo o desperdício e facilitando a doação de comida dentro da comunidade. Construído com React no front-end e Firebase como backend (autenticação e banco de dados em tempo real).',
    tags: [
      { label: 'React', className: 'tag-violet' },
      { label: 'Firebase', className: 'tag-cyan' },
      { label: 'Git', className: 'tag-green' },
    ],
    link: null,
  },
  {
    meta: 'UNIFOR · Geolocalização & Gamificação',
    title: 'Unifor Hunt',
    desc: 'Projeto acadêmico da UNIFOR que usa geolocalização e mecânicas de gamificação como estratégia para incentivar a exploração do campus universitário, transformando o reconhecimento dos espaços da faculdade em uma espécie de caça ao tesouro interativa.',
    tags: [
      { label: 'JavaScript', className: 'tag-orange' },
      { label: 'Geolocation API', className: 'tag-cyan' },
      { label: 'Gamificação', className: 'tag-pink' },
    ],
    link: 'https://unifor-hunt.vercel.app/',
  },
  {
    meta: 'Projeto Pessoal · Simulação & IA',
    title: 'RallyCourt.io',
    desc: 'Simulador de tênis interativo com integração de inteligência artificial, desenvolvido do zero em HTML, CSS e JavaScript puro — do motor de física das jogadas à lógica de decisão do oponente controlado por IA.',
    tags: [
      { label: 'HTML5', className: 'tag-orange' },
      { label: 'CSS3', className: 'tag-pink' },
      { label: 'JavaScript', className: 'tag-violet' },
      { label: 'IA', className: 'tag-cyan' },
    ],
    link: 'https://rallyio.vercel.app/',
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="section-pad">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Trabalhos <span>acadêmicos</span></h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-body">
                <p className="project-meta">{project.meta}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className={`project-tag ${tag.className}`} key={tag.label}>
                      {tag.label}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <DemoIcon />
                      Ver demo
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}