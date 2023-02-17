import "./Footer.css"
import { BsLinkedin, BsGithub, BsFillTelephoneFill} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
        <h1>Contato</h1>
        <div className="contact">
          <a className="phone" linktype="telefone" href="tel://5527996895409"><i><BsFillTelephoneFill/></i>Telefone: <span>(27) 99689-5409</span></a>
          <a className="email"  href="mailto://arturreis.dev@gmail.com?subject=Ola%Artur" ><i><SiGmail/></i>Email: <span>arturreis.dev@gmail.com</span></a>
          <a className="linkedin" href="https://www.linkedin.com/in/arturReiss" target="_blank" ><i><BsLinkedin/></i>Linkedin: <span>Artur Reiss</span></a>
          <a className="github" href="https://github.com/Artu-Dev" target="_blank" ><i><BsGithub/></i>Github: <span>Artu-Dev</span></a>
        </div>
    </footer>
  )
}

export default Footer