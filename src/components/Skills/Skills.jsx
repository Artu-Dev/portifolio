import {
  DiSass,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export const skills = {
  html: {
    name: "HTML",
    desc: "Habilidade em desenvolver códigos HTML limpos e semânticos para sites e aplicações web, com conhecimentos em acessibilidade, SEO e usabilidade. Busco constantemente aprender novas tecnologias e tendências para aprimorar minhas habilidades em HTML.",
    icon: <DiHtml5 />,
  },
  css: {
    name: "CSS",
    desc: "Habilidade em criar designs elegantes e modernos para sites e aplicações web utilizando CSS, media query, flexbox e grid. Prioridade na responsividade e adaptação do design a qualquer tamanho de tela, proporcionando uma experiência de usuário agradável e intuitiva.",
    icon: <DiCss3 />,
  },
  javascript: {
    name: "JavaScript",
    desc: "Experiência em JavaScript, criação de funções personalizadas, consumo de API's, manipulação de DOM e uso de bibliotecas. Habilidade para criar interfaces de usuário interativas e responsivas em aplicações web. Buscando sempre aprender novas tecnologias e aprimorar minhas habilidades em JavaScript.",
    icon: <IoLogoJavascript />,
  },
  react: {
    name: "ReactJS",
    desc: "Tenho habilidade em desenvolvimento com React, uma das bibliotecas mais populares para construção de interfaces de usuário. Com minha habilidade em React, posso criar componentes reutilizáveis e aumentar a eficiência no desenvolvimento de aplicações web.",
    icon: <DiReact />,
  },
  sass: {
    name: "SASS",
    desc: "Com meu conhecimento em SASS, posso criar estilos escaláveis e reutilizáveis para sites e aplicações web. Utilizo variáveis, mixins e funções para escrever códigos CSS mais limpos e organizados, aumentando a eficiência no desenvolvimento de projetos.",
    icon: <DiSass />,
  },
  nodejs: {
    name: "NodeJs",
    desc: "Tenho conhecimentos básicos em Node.js, o que me permite desenvolver aplicações do lado do servidor. Consigo criar operações CRUD utilizando o MongoDB como banco de dados. possuo conhecimentos básicos em JWT (JSON Web Tokens) para autenticação e autorização em aplicações. Estou em constante aprendizado, buscando aprimorar minhas habilidades em Node.js.",
    icon: <DiNodejsSmall />,
  },
  typescript: {
    name: "TypeScript",
    desc: "Tenho experiência em desenvolvimento com TypeScript. Com TypeScript, posso escrever aplicações mais robustas e escaláveis, detectando erros em tempo de compilação. Estou sempre aprendendo e aprimorando minhas habilidades em TypeScript.",
    icon: <SiTypescript />,
  },
};
