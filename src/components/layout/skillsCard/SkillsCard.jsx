import { DiSass, DiHtml5, DiCss3, DiReact, DiNodejsSmall} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5"
import "./SkillsCard.css";


const SkillsCard = () => {
  const skills = [
    {name: "HTML",
      desc: "Habilidade em desenvolver códigos HTML limpos e semânticos para sites e aplicações web, com conhecimentos em acessibilidade, SEO e usabilidade. Busco constantemente aprender novas tecnologias e tendências para aprimorar minhas habilidades em HTML.", 
      img: <DiHtml5/>},
    {name: "CSS",
      desc: "Habilidade em criar designs elegantes e modernos para sites e aplicações web utilizando CSS, media query, flexbox e grid. Prioridade na responsividade e adaptação do design a qualquer tamanho de tela, proporcionando uma experiência de usuário agradável e intuitiva.", 
      img: <DiCss3/>},
    {name: "JavaScript",
      desc: "Experiência em JavaScript, criação de funções personalizadas, consumo de API's, manipulação de DOM e uso de bibliotecas. Habilidade para criar interfaces de usuário interativas e responsivas em aplicações web. Buscando sempre aprender novas tecnologias e aprimorar minhas habilidades em JavaScript.", 
      img: <IoLogoJavascript/>},
    {name: "ReactJS",
      desc: "Tenho habilidade em desenvolvimento com React, uma das bibliotecas mais populares para construção de interfaces de usuário. Com minha habilidade em React, posso criar componentes reutilizáveis e aumentar a eficiência no desenvolvimento de aplicações web.", 
      img: <DiReact/>},
    {name: "SASS",
      desc: "Com meu conhecimento em SASS, posso criar estilos escaláveis e reutilizáveis para sites e aplicações web. Utilizo variáveis, mixins e funções para escrever códigos CSS mais limpos e organizados, aumentando a eficiência no desenvolvimento de projetos.", 
      img: <DiSass/>},
      {
        name: "NodeJs",
        desc: "Tenho conhecimentos básicos em Node.js, o que me permite desenvolver aplicações do lado do servidor. Consigo criar operações CRUD utilizando o MongoDB como banco de dados. possuo conhecimentos básicos em JWT (JSON Web Tokens) para autenticação e autorização em aplicações. Estou em constante aprendizado, buscando aprimorar minhas habilidades em Node.js.",
        img: <DiNodejsSmall/>
      }
  ];

  return (
    <>
      <h1 className="main_title">Habilidades</h1>
      <div className="card_container">
        {skills.map((skill) => (
          <a  href="#projetos" key={skill.name}>
            <div className={`Skillcard_container ${skill.name}`} key={skill.name}>
              <i className="icon" href="#projetos">{skill.img}</i>
              <div>
                <h1>{skill.name}</h1>
                <p>{skill.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}

export default SkillsCard