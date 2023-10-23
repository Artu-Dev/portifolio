import { skills } from "../../Skills/Skills";
import "./SkillsCard.css";

const SkillsCard = () => {
  return (
    <>
      <h1 className="main_title">Habilidades</h1>
      <div className="card_container">
        {Object.values(skills).map((skill) => (
          <a href="#projetos" key={skill.name}>
            <div
              className={`Skillcard_container ${skill.name}`}
              key={skill.name}
            >
              <i className="icon" href="#projetos">
                {skill.icon}
              </i>
              <div>
                <h1>{skill.name}</h1>
                <p>{skill.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default SkillsCard;
