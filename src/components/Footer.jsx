import { useSite } from '../SiteContext'
export default function Footer() {
  const { t } = useSite()
  return (
    <footer>
      <p className="footer-text">{t.footer}</p>
      <div className="footer-actions">
        <a className="footer-resume" href="/Curriculo_Isabella_Anton.pdf" download>{t.resume}</a>
        <a href="https://linkedin.com/in/isabella-anton" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/isabellaanton" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  )
}
