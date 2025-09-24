
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProjectsSection from './components/ProjectSection/ProjectsSection'
import { PERSONAL_INFO } from './data/PersonalInfo'
import { PROJECTS_DATA } from './data/ProjectData'


function App() {
 

  return (
    <>
     <Header   
        isStudent={PERSONAL_INFO.isStudent} 
        name={PERSONAL_INFO.name}
        title={PERSONAL_INFO.title} />
        <AboutMe  description="I’m a frontend developer passionate about React, JavasCript and building clean UI experiences."
        image="./src/assets/abtme.png"/>
        <ProjectsSection projects={ PROJECTS_DATA}/>
        <Footer  text={PERSONAL_INFO.footerText} 
        links={PERSONAL_INFO.footerLinks} />
    </>
  )
}

export default App
