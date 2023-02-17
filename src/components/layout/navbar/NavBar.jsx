import { useRef } from "react";
import { RiCloseLine, RiMenu5Line } from "react-icons/ri";
import "./NavBar.css";

const NavBar = () => {
  const navRef = useRef();
  const svgRef = useRef();

  const toggleNavBar = () => {
    navRef.current.classList.toggle('activated')
    svgRef.current.classList.toggle('activated')
  }
  const removeNavBar = () => {
    navRef.current.classList.remove('activated')
    svgRef.current.classList.remove('activated')
  }

  return (
    <nav>
      <div className="nav">
        <div>
          <h1>ArtDv</h1>  
        </div>
          <div ref={svgRef} onClick={toggleNavBar} className="svgIcon-container">
            <RiMenu5Line className="barOpen"/>
            <RiCloseLine className="barclose"/>
          </div>
          <div ref={navRef} onMouseLeave={removeNavBar} className="menu">
            <ul>
              <li><a href="#home" onClick={removeNavBar}>Home</a></li>
              <li><a href="#skills" onClick={removeNavBar}>Skills</a></li>
              <li><a href="#projects" onClick={removeNavBar}>Projetos</a></li>
              <li><a href="#contact" onClick={removeNavBar}>Contato</a></li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default NavBar