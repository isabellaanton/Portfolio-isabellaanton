const SKILL_CATEGORIES = [
  {
    icon: '💻',
    iconClass: 'icon-violet',
    title: 'Linguagens de Programação',
    tags: ['Python', 'C', 'C++', 'Java', 'HTML5', 'CSS3', 'JavaScript', 'SQL'],
  },
  {
    icon: '🛠️',
    iconClass: 'icon-cyan',
    title: 'Ferramentas & Tecnologias',
    tags: ['Git', 'GitHub', 'VS Code', 'Linux', 'MySQL', 'PostgreSQL', 'Figma', 'Jupyter'],
  },
  {
    icon: '🧠',
    iconClass: 'icon-pink',
    title: 'Competências',
    tags: ['Resolução de Problemas', 'Trabalho em Equipe', 'Comunicação', 'Aprendizado Rápido', 'Inglês Técnico', 'Pensamento Crítico'],
  },
  {
    icon: '📐',
    iconClass: 'icon-violet',
    title: 'Fundamentos de CS',
    tags: ['Estruturas de Dados', 'Algoritmos', 'POO', 'Banco de Dados', 'Redes', 'SO'],
  },
  {
    icon: '🤖',
    iconClass: 'icon-cyan',
    title: 'Em Exploração',
    tags: ['Machine Learning', 'Pandas', 'NumPy', 'React', 'Node.js', 'Docker'],
  },
  {
    icon: '🎯',
    iconClass: 'icon-pink',
    title: 'Metodologias',
    tags: ['Agile / Scrum', 'Kanban', 'Clean Code', 'Versionamento', 'Code Review'],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="section-pad">
      <div className="container">
        <div className="reveal">
          <p className="section-label">// 02 · habilidades</p>
          <h2 className="section-title">O que eu <span>domino</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skill-category reveal" key={cat.title}>
              <div className={`skill-cat-icon ${cat.iconClass}`}>{cat.icon}</div>
              <p className="skill-cat-title">{cat.title}</p>
              <div className="skill-tags">
                {cat.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
