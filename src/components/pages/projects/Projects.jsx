import "./Projects.css";
import "../../layout/skillsCard/SkillsCard.css";

import { DiSass, DiHtml5, DiCss3, DiReact, DiJavascript, DiNodejsSmall } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

import Projetos from "./Projetos";
import { skills } from "../../Skills/Skills";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  function handleClickImage(projeto) {
    if(projeto.link) window.open(projeto.link, "_blank");
    else window.open(projeto.repo, "_blank");
  }

  function PrintProjectCard(projeto) {
    if(!projeto.tech.some(e => e.name === selected) && selected) return
    return (
      <article className="projectCard_container" key={projeto.nome}>
        <div
          onClick={() => handleClickImage(projeto)}
          className="projectCard_img"
          style={{ backgroundImage: `url(${projeto.img})` }}
        ></div>
        <div className="project_title">
          <h1>{projeto.nome}</h1>
          <div>
            <p>{projeto.desc}</p>
          </div>
        </div>
        <div className="project_links">
          {projeto.link && 
            <a href={projeto.link} target="_blank">
              Demo
            </a>
          }
          <a href={projeto.repo} className="repo_btn" target="_blank">
            Repositorio <FaGithub />
          </a>
        </div>
        <div className="project_tech">
          {projeto.tech.map((item, index) => (
            <i
              href=""
              key={index}
              className={`${item.name} ${item.name === selected ? "selected" : ""}`}
              onClick={() => handleClickIcon(item.name)}>
              {item.icon}
            </i>
          ))}
        </div>
      </article>
    );
  }

  function handleClickIcon(name) {
    if(selected === name) {
      setSelected(null)
      return
    }
    setSelected(name)
  }

  return (
    <div id="projetos" className="projects">
      <h1>Projetos</h1>

      <div className="projects_filter">
        {Object.values(skills).map((filter, index) => (
          <i
            className={`${filter.name} ${filter.name === selected ? "selected" : ""}`}
            name={filter.name}
            key={index}
            onClick={() => handleClickIcon(filter.name)}
          >
            {filter.icon}
          </i>
        ))}
        <p className="clearFilter" onClick={() => setSelected(null)}>
          Limpar Filtros
        </p>
      </div>

      <div className="projects_container">
        {Projetos.map(projeto => 
          PrintProjectCard(projeto)
        )}
      </div>
    </div>
  );
};

export default Projects;
