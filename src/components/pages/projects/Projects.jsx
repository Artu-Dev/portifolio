import "./Projects.css";
import "../../layout/skillsCard/SkillsCard.css";

import { DiSass, DiHtml5, DiCss3, DiReact, DiJavascript, DiNodejsSmall } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import Projetos from "./Projetos";

const Projects = () => {

  const [selectedTech, setselectedTech] = useState("");
  const [techSelect, setTechSelect] = useState("");

  const filters = [
    {
      name: "HTML",
      ref: useRef(),
      icon: <DiHtml5 />,
    },
    {
      name: "CSS",
      ref: useRef(),
      icon: <DiCss3/>,
    },
    {
      name: "JavaScript",
      ref: useRef(),
      icon: <DiJavascript/>,
    },
    {
      name: "ReactJS",
      ref: useRef(),
      icon: <DiReact/>,
    },
    {
      name: "NodeJs",
      ref: useRef(),
      icon: <DiNodejsSmall/>,
    },
    {
      name: "SASS",
      ref: useRef(),
      icon: <DiSass/>,
    },
  ]

  useEffect(() => {
    if (!selectedTech) return;
  }, [selectedTech]);

  function handleFilter(tech, e) {
    setselectedTech(tech);
    if (!e) {
      clearSelection();
      return;
    }

    if (e.current) {
      return checkSelection(e.current, tech);
    }
    checkSelection(e.target, tech);
  }

  function checkSelection(element, selectedTech) {
    clearSelection();
    if (element.classList == selectedTech) {
      element.classList.add("selected");
      setTechSelect("selected");
    }
  }

  function getElementByClass(className) {
    if(className){
      const elementClicked = filters.find((filter) => filter.name === className);
      return elementClicked ? elementClicked.ref : null;
    }
  }

  function clearSelection() {
    setTechSelect("");
    filters.forEach(filter => {
      filter.ref.current.classList.remove("selected")
    })
  }

  function PrintProjectCard(projeto) {
    return (
      <article className="projectCard_container" key={projeto.nome}>
        <div
          className="projectCard_img"
          // style={{ backgroundImage: `url(${import.meta.env.VITE_APIFLASH_SECRET}&url=${projeto.link})` }}
          style={{ backgroundImage: `url(${projeto.img})` }}
        ></div>
        <div className="project_title">
          <h1>{projeto.nome}</h1>
          <div>
            <p>{projeto.desc}</p>
          </div>
        </div>
        <div className="project_links">
          <a href={projeto.link} target="_blank">
            Demo
          </a>
          <a href={projeto.repo} className="repo_btn" target="_blank">
            Repositorio <FaGithub />
          </a>
        </div>
        <div className="project_tech">
          {projeto.tech.map((item, index) => (
            <i
              href=""
              key={index}
              className={item.classe}
              onClick={(e) =>
                handleFilter(item.classe, getElementByClass(item.classe))
              }>
              {item.icone}
            </i>
          ))}
        </div>
      </article>
    );
  }

  return (
    <div id="projetos" className="projects">
      <h1>Projetos</h1>

      <div className="projects_filter">
        {filters.map((filter, index) => (
          <i
            className={filter.name}
            name={filter.name}
            key={index}
            ref={filter.ref}
            onClick={() => handleFilter(filter.name, filter.ref)}
          >
            {filter.icon}
          </i>
        ))}
        <p className="clearFilter" onClick={() => handleFilter("")}>
          Limpar Filtros
        </p>
      </div>

      <div className="projects_container">
        {
          Projetos.filter((projeto) => {
            if(selectedTech === "") return true;
            return projeto.tech.some((projectClass) => projectClass.classe === selectedTech);
          }).map((filtredProjects) => PrintProjectCard(filtredProjects))
        }
      </div>
    </div>
  );
};

export default Projects;
