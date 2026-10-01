import { useSite } from '../SiteContext'
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
  const { t } = useSite()
  const categoryNames = {
    pt: ['Linguagens', 'Ferramentas', 'Fundamentos de CS', 'Em exploração', 'Metodologias', 'Competências'],
    en: ['Languages', 'Tools', 'Computer Science fundamentals', 'Exploring', 'Methods', 'Skills'],
    fr: ['Langages', 'Outils', 'Fondamentaux de l’informatique', 'En exploration', 'Méthodes', 'Compétences'],
    de: ['Programmiersprachen', 'Werkzeuge', 'Informatikgrundlagen', 'In Erkundung', 'Methoden', 'Kompetenzen'],
  }
  const { language } = useSite()
  return (
    <section id="habilidades" className="section-pad">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">{t.skillsTitle}</h2>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skill-category reveal" key={cat.title}>
              <p className="skill-cat-title">{categoryNames[language][SKILL_CATEGORIES.indexOf(cat)]}</p>
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
