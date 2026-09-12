const SKILL_CATEGORIES = [
  {
    title: 'Linguagens',
    tags: ['Python', 'C', 'C++', 'Java', 'HTML5', 'CSS3', 'JavaScript', 'SQL'],
  },
  {
    title: 'Ferramentas',
    tags: ['Git', 'GitHub', 'VS Code', 'Linux', 'MySQL', 'PostgreSQL', 'Figma', 'Jupyter'],
  },
  {
    title: 'Fundamentos de CS',
    tags: ['Estruturas de Dados', 'Algoritmos', 'POO', 'Banco de Dados', 'Redes', 'SO'],
  },
  {
    title: 'Em exploração',
    tags: ['Machine Learning', 'Pandas', 'NumPy', 'React', 'Node.js', 'Docker'],
  },
  {
    title: 'Metodologias',
    tags: ['Agile / Scrum', 'Kanban', 'Clean Code', 'Versionamento', 'Code Review'],
  },
  {
    title: 'Competências',
    tags: ['Resolução de Problemas', 'Trabalho em Equipe', 'Comunicação', 'Aprendizado Rápido', 'Inglês Técnico', 'Pensamento Crítico'],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="section-pad">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">O que eu <span>domino</span></h2>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skill-category reveal" key={cat.title}>
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