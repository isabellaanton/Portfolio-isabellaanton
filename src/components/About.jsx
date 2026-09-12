const STATS = [
  { number: '4º', label: 'Semestre · Ciência da Computação / UNIFOR' },
  { number: '3+', label: 'Projetos práticos, do full-stack ao front-end com IA' },
  { number: '100%', label: 'Dedicação para o primeiro estágio ou emprego' },
]

export default function About() {
  return (
    <section id="sobre" className="section-pad">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">Quem sou <span>eu</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Olá! Sou <strong>Isabella Anton</strong>, estudante do 4º semestre de{' '}
              <strong>Ciência da Computação</strong> na UNIFOR — Universidade de Fortaleza.
              Apaixonada por tecnologia desde cedo, escolhi a área porque acredito que o
              software tem o poder de transformar vidas.
            </p>
            <p>
              Ao longo da graduação, desenvolvi uma base sólida em lógica de programação,
              estruturas de dados, algoritmos e banco de dados. Agora, busco um{' '}
              <strong>estágio ou emprego em TI</strong> para conectar esse conhecimento
              teórico à prática do mercado, contribuir com times reais e continuar
              crescendo rápido.
            </p>
            <p>
              Meus interesses giram em torno de <strong>desenvolvimento web</strong>,{' '}
              <strong>inteligência artificial</strong>, <strong>ciência de dados</strong> e{' '}
              <strong>engenharia de software</strong> — áreas que combino sempre que posso
              nos projetos acadêmicos.
            </p>
          </div>

          <div className="about-stats reveal">
            {STATS.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}