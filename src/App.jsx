import GlowBackground from './components/GlowBackground'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'
import { SiteProvider } from './SiteContext'

export default function App() {
  useScrollReveal()

  return (
    <SiteProvider>
    <>
      <GlowBackground />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
    </SiteProvider>
  )
}
