import "./About.css";
import { HiDownload } from "react-icons/hi";
import { DiSass, DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5"
import "../../layout/skillsCard/SkillsCard.css"

const About = () => {
  return (
    <section className="about-container" id="home">
        <div className="circleBG"></div>
        <div className="circleBG2"></div>
        <div className="about-text">
          <h1>Meu Nome é <a href="#about">Artur.</a></h1>
          <h2>Sou um Programador <span>front-end Junior</span></h2>
          <div className="about-tech"> 
            <a href="#skills" className="HTML"><DiHtml5/></a>
            <a href="#skills" className="CSS"><DiCss3/></a>
            <a href="#skills" className="JavaScript"><IoLogoJavascript/></a>
            <a href="#skills" className="SASS"><DiSass/></a>
            <a href="#skills" className="ReactJS"><DiReact/></a>
          </div>
        </div>
        <div className="about-buttons">
          <a className="btnContact" href="#contact">Trabalhe comigo!</a>
          <a className="btnDownload" href="#">Download CV <HiDownload/> </a>
        </div>
    </section>
  )
}

export default About