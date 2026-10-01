import { useSite } from '../SiteContext'
const STATS = [
  { number: '4º', key: 0 }, { number: '10+', key: 1 }, { number: 'EN', key: 2 },
]

export default function About() {
  const { t } = useSite()
  return (
    <section id="sobre" className="section-pad">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">{t.aboutTitle}</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              {t.about1}
            </p>
            <p>
              {t.about2}
            </p>
            <p>
              {t.about3}
            </p>
          </div>

          <div className="about-stats reveal">
            {STATS.map((stat) => (
              <div className="stat-card" key={stat.key}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{t.stats[stat.key]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
