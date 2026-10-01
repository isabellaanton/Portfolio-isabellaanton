import { createContext, useContext, useEffect, useState } from 'react'

const translations = {
  pt: {
    nav: ['Sobre', 'Habilidades', 'Projetos', 'Contato'], themeLight: 'Modo claro', themeDark: 'Modo escuro',
    eyebrow: 'Ciência da Computação · Fortaleza, Brasil', tagline: <>Construindo o futuro, <strong>uma linha de código por vez.</strong></>, degree: 'Ciência da Computação', semester: 'UNIFOR · 4º Semestre', location: 'Fortaleza, CE',
    aboutTitle: <>Quem sou <span>eu</span></>, about1: <>Olá! Sou <strong>Isabella Anton</strong>, estudante do 4º semestre de <strong>Ciência da Computação</strong> na UNIFOR — Universidade de Fortaleza. Sou brasileira-francesa-britânica e nasci na Inglaterra, por isso tenho inglês fluente. Apaixonada por tecnologia, acredito que o software tem o poder de transformar vidas.</>, about2: <>Ao longo da graduação, desenvolvi uma base sólida em lógica de programação, estruturas de dados, algoritmos e banco de dados. Já criei <strong>mais de 10 projetos individuais</strong>, explorando ideias e tecnologias diferentes.</>, about3: <>Meus interesses giram em torno de <strong>desenvolvimento web</strong>, <strong>inteligência artificial</strong>, <strong>ciência de dados</strong> e <strong>engenharia de software</strong>.</>,
    stats: ['Semestre · Ciência da Computação / UNIFOR', 'Projetos individuais', 'Inglês fluente · nascida na Inglaterra'], skillsTitle: <>O que eu <span>domino</span></>, projectsTitle: <>Projetos <span>em destaque</span></>, contactTitle: <>Encontre-me <span>online</span></>, contactLead: 'Acompanhe meus projetos e entre em contato pelas minhas redes sociais.',
    projectMeta: ['UNIFOR · Projeto Full-Stack', 'UNIFOR · Geolocalização & Gamificação', 'Projeto Pessoal · Simulação & IA', 'Projeto Individual · Música & Web Audio API'], projectDesc: ['Aplicativo que conecta doadores e receptores de alimentos, combatendo o desperdício e facilitando a doação dentro da comunidade. Construído com React e Firebase.', 'Projeto acadêmico que usa geolocalização e gamificação para incentivar a exploração do campus universitário.', 'Simulador de tênis interativo com inteligência artificial, desenvolvido do zero em HTML, CSS e JavaScript.', 'Drum machine em português do Brasil, feita com JavaScript moderno e Web Audio API. Monte padrões, ajuste o mixer e grave suas ideias sem instalar dependências.'], demo: 'Ver projeto', code: 'Ver no GitHub',
    socials: ['LinkedIn', 'GitHub', 'E-mail'], footer: '© 2026 Isabella Anton — Todos os direitos reservados', resume: 'Baixar currículo',
  },
  en: {
    nav: ['About', 'Skills', 'Projects', 'Contact'], themeLight: 'Light mode', themeDark: 'Dark mode', eyebrow: 'Computer Science · Fortaleza, Brazil', tagline: <>Building the future, <strong>one line of code at a time.</strong></>, degree: 'Computer Science', semester: 'UNIFOR · 4th semester', location: 'Fortaleza, Brazil',
    aboutTitle: <>Who I <span>am</span></>, about1: <>Hi! I’m <strong>Isabella Anton</strong>, a fourth-semester <strong>Computer Science</strong> student at UNIFOR — University of Fortaleza. I’m Brazilian-French-British and was born in England, so I’m fluent in English. Passionate about technology, I believe software can transform lives.</>, about2: <>Throughout my degree, I’ve built a strong foundation in programming logic, data structures, algorithms, and databases. I have created <strong>more than 10 individual projects</strong>, exploring different ideas and technologies.</>, about3: <>My interests include <strong>web development</strong>, <strong>artificial intelligence</strong>, <strong>data science</strong>, and <strong>software engineering</strong>.</>,
    stats: ['Semester · Computer Science / UNIFOR', 'Individual projects', 'Fluent English · born in England'], skillsTitle: <>What I <span>know</span></>, projectsTitle: <>Featured <span>projects</span></>, contactTitle: <>Find me <span>online</span></>, contactLead: 'Follow my projects and get in touch through my social profiles.',
    projectMeta: ['UNIFOR · Full-Stack Project', 'UNIFOR · Geolocation & Gamification', 'Personal Project · Simulation & AI', 'Individual Project · Music & Web Audio API'], projectDesc: ['An app connecting food donors and recipients to reduce waste and make community food donations easier. Built with React and Firebase.', 'An academic project using geolocation and gamification to encourage exploration of the university campus.', 'An interactive tennis simulator with artificial intelligence, built from scratch with HTML, CSS, and JavaScript.', 'A drum machine in Brazilian Portuguese, built with modern JavaScript and the Web Audio API. Create patterns, adjust the mixer, and record ideas without installing dependencies.'], demo: 'View project', code: 'View on GitHub',
    socials: ['LinkedIn', 'GitHub', 'Email'], footer: '© 2026 Isabella Anton — All rights reserved', resume: 'Download résumé',
  },
  fr: {
    nav: ['À propos', 'Compétences', 'Projets', 'Contact'], themeLight: 'Mode clair', themeDark: 'Mode sombre', eyebrow: 'Informatique · Fortaleza, Brésil', tagline: <>Construire l’avenir, <strong>une ligne de code à la fois.</strong></>, degree: 'Informatique', semester: 'UNIFOR · 4e semestre', location: 'Fortaleza, Brésil',
    aboutTitle: <>Qui suis-<span>je</span></>, about1: <>Bonjour ! Je suis <strong>Isabella Anton</strong>, étudiante en quatrième semestre d’<strong>informatique</strong> à l’UNIFOR — Université de Fortaleza. Je suis brésilienne-française-britannique et je suis née en Angleterre, donc je parle couramment anglais. Passionnée de technologie, je crois que les logiciels peuvent transformer des vies.</>, about2: <>Au fil de mes études, j’ai acquis de solides bases en logique de programmation, structures de données, algorithmes et bases de données. J’ai créé <strong>plus de 10 projets individuels</strong>, en explorant différentes idées et technologies.</>, about3: <>Mes centres d’intérêt incluent le <strong>développement web</strong>, l’<strong>intelligence artificielle</strong>, la <strong>science des données</strong> et le <strong>génie logiciel</strong>.</>,
    stats: ['Semestre · Informatique / UNIFOR', 'Projets individuels', 'Anglais courant · née en Angleterre'], skillsTitle: <>Ce que je <span>maîtrise</span></>, projectsTitle: <>Projets <span>à la une</span></>, contactTitle: <>Retrouvez-moi <span>en ligne</span></>, contactLead: 'Suivez mes projets et contactez-moi via mes réseaux sociaux.',
    projectMeta: ['UNIFOR · Projet Full-Stack', 'UNIFOR · Géolocalisation & Gamification', 'Projet Personnel · Simulation & IA', 'Projet Individuel · Musique & Web Audio API'], projectDesc: ['Application qui met en relation les donateurs et les bénéficiaires de nourriture pour lutter contre le gaspillage. Réalisée avec React et Firebase.', 'Projet universitaire utilisant la géolocalisation et la gamification pour encourager la découverte du campus.', 'Simulateur de tennis interactif avec intelligence artificielle, développé en HTML, CSS et JavaScript.', 'Boîte à rythmes en portugais brésilien, réalisée avec JavaScript moderne et la Web Audio API. Créez des motifs, réglez la table de mixage et enregistrez vos idées sans installer de dépendances.'], demo: 'Voir le projet', code: 'Voir sur GitHub',
    socials: ['LinkedIn', 'GitHub', 'E-mail'], footer: '© 2026 Isabella Anton — Tous droits réservés', resume: 'Télécharger le CV',
  },
  de: {
    nav: ['Über mich', 'Kenntnisse', 'Projekte', 'Kontakt'], themeLight: 'Heller Modus', themeDark: 'Dunkler Modus', eyebrow: 'Informatik · Fortaleza, Brasilien', tagline: <>Die Zukunft gestalten, <strong>eine Codezeile nach der anderen.</strong></>, degree: 'Informatik', semester: 'UNIFOR · 4. Semester', location: 'Fortaleza, Brasilien',
    aboutTitle: <>Wer ich <span>bin</span></>, about1: <>Hallo! Ich bin <strong>Isabella Anton</strong>, Informatikstudentin im vierten Semester an der UNIFOR — Universität Fortaleza. Ich bin brasilianisch-französisch-britisch und in England geboren, daher spreche ich fließend Englisch. Ich begeistere mich für Technologie und glaube, dass Software Leben verändern kann.</>, about2: <>Im Studium habe ich fundierte Kenntnisse in Programmierlogik, Datenstrukturen, Algorithmen und Datenbanken erworben. Ich habe <strong>mehr als 10 Einzelprojekte</strong> mit verschiedenen Ideen und Technologien umgesetzt.</>, about3: <>Meine Interessen umfassen <strong>Webentwicklung</strong>, <strong>künstliche Intelligenz</strong>, <strong>Data Science</strong> und <strong>Softwareentwicklung</strong>.</>,
    stats: ['Semester · Informatik / UNIFOR', 'Einzelprojekte', 'Fließend Englisch · in England geboren'], skillsTitle: <>Was ich <span>kann</span></>, projectsTitle: <>Ausgewählte <span>Projekte</span></>, contactTitle: <>Hier bin ich <span>online</span></>, contactLead: 'Folge meinen Projekten und kontaktiere mich über meine sozialen Netzwerke.',
    projectMeta: ['UNIFOR · Full-Stack-Projekt', 'UNIFOR · Geolokalisierung & Gamification', 'Persönliches Projekt · Simulation & KI', 'Einzelprojekt · Musik & Web Audio API'], projectDesc: ['Eine App, die Lebensmittelspender und Empfänger verbindet, um Verschwendung zu reduzieren. Entwickelt mit React und Firebase.', 'Ein Hochschulprojekt mit Geolokalisierung und Gamification, das zur Erkundung des Campus einlädt.', 'Interaktive Tennissimulation mit künstlicher Intelligenz, von Grund auf mit HTML, CSS und JavaScript entwickelt.', 'Drum-Machine auf brasilianischem Portugiesisch, entwickelt mit modernem JavaScript und der Web Audio API. Erstelle Muster, passe den Mixer an und nimm Ideen ohne Installation zusätzlicher Abhängigkeiten auf.'], demo: 'Projekt ansehen', code: 'Auf GitHub ansehen',
    socials: ['LinkedIn', 'GitHub', 'E-Mail'], footer: '© 2026 Isabella Anton — Alle Rechte vorbehalten', resume: 'Lebenslauf herunterladen',
  },
}

const Context = createContext(null)

function readPreference(key, allowedValues, fallback) {
  try {
    const savedValue = localStorage.getItem(key)
    return allowedValues.includes(savedValue) ? savedValue : fallback
  } catch {
    return fallback
  }
}

export function SiteProvider({ children }) {
  const [language, setLanguage] = useState(() => readPreference('portfolio-language', Object.keys(translations), 'pt'))
  const [theme, setTheme] = useState(() => readPreference('portfolio-theme', ['dark', 'light'], 'dark'))
  useEffect(() => {
    try { localStorage.setItem('portfolio-language', language) } catch { /* Storage may be disabled by the browser. */ }
    document.documentElement.lang = ({ pt: 'pt-BR', en: 'en', fr: 'fr', de: 'de' })[language] || 'pt-BR'
  }, [language])
  useEffect(() => {
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* Storage may be disabled by the browser. */ }
    document.documentElement.dataset.theme = theme
  }, [theme])
  return <Context.Provider value={{ t: translations[language] || translations.pt, language, setLanguage, theme, setTheme }}>{children}</Context.Provider>
}
export const useSite = () => useContext(Context)
