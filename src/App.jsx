import './App.css'
import Footer from './components/layout/footer/Footer'
import NavBar from './components/layout/navbar/NavBar'
import SkillsCard from './components/layout/skillsCard/SkillsCard'
import About from './components/pages/about/About'
import { AboutSecondary } from './components/pages/about/AboutSecondary'
import Projects from './components/pages/projects/Projects'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <About />
      <AboutSecondary />
      <section id='skills'>
        <SkillsCard />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <footer id='contact'>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
