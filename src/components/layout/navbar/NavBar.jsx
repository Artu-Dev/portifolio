import { useRef } from "react";
import { RiCloseLine, RiMenu5Line } from "react-icons/ri";
import "./NavBar.css";

const NavBar = () => {
  const navRef = useRef();

  const showItems = () => {
    navRef.current.classList.toggle('activated')
  }

  return (
    <nav>
      <div ref={navRef} className="nav">
        <div>
          <h1>ArtDv</h1>  
        </div>
        <RiMenu5Line onClick={showItems} />
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar