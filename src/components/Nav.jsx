import { useEffect, useRef } from 'react'
import { useSite } from '../SiteContext'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  const { t, language, setLanguage, theme, setTheme } = useSite()
  const navRef = useRef(null)
  const linkRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.padding = window.scrollY > 60 ? '12px 60px' : '20px 60px'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            linkRefs.current.forEach((a) => {
              if (!a) return
              a.style.color = a.getAttribute('href') === `#${entry.target.id}` ? 'var(--accent)' : ''
            })
          }
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav ref={navRef}>
      <ul className="nav-links">
        {LINKS.map((link, i) => (
          <li key={link.href}>
            <a href={link.href} ref={(el) => (linkRefs.current[i] = el)}>
              {t.nav[i]}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-controls">
        <label className="sr-only" htmlFor="language">Language</label>
        <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Language">
          <option value="pt">PT</option><option value="en">EN</option><option value="fr">FR</option><option value="de">DE</option>
        </select>
        <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? t.themeLight : t.themeDark} title={theme === 'dark' ? t.themeLight : t.themeDark}>
          {theme === 'dark' ? '☼' : '☾'}
        </button>
      </div>
    </nav>
  )
}
