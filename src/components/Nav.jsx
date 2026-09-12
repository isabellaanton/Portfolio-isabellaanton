import { useEffect, useRef } from 'react'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
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
              a.style.color = a.getAttribute('href') === `#${entry.target.id}` ? 'var(--text)' : ''
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
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
