import images from "../../../assets/images.jsx";

import { DiSass, DiHtml5, DiCss3, DiReact, DiNodejsSmall } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";

const Projetos = [
  {
    nome: "Toxibook (FRONT)",
    img: images.toxibookIMG,
    desc: "Toxibook é uma rede social inspirada no Twitter, baseada em MERN stack (MongoDB, Express, React e Node.js). Projeto feito utilizando varias bibliotecas e tecnologias",
    tech: [
      { classe: "ReactJS", icone: <DiReact />},
      { classe: "CSS", icone: <DiCss3 />}
    ],
    link: "https://toxibook.vercel.app/",
    repo: "https://github.com/Artu-Dev/ToxibookFRONT",
  },
  {
    nome: "Toxibook (BACK)",
    img: images.toxibookIMG,
    desc: "Componente de backend da rede social Toxibook, desenvolvido com Node.js. Responsável pelo processamento de dados e interações com o banco de dados. ",
    tech: [
      { classe: "NodeJs", icone: <DiNodejsSmall />},
    ],
    link: null,
    repo: "https://github.com/Artu-Dev/ToxibookBACK",
  },
  {
    nome: "JanKenCards (Front)",
    img: images.jankencardsIMG,
    desc: "JanKenCards é um jogo de de \"pedra papel tesoura\" utilizando cartas, foi desenvolvido utiliando Socket.io e React",
    tech: [
      { classe: "JavaScript", icone: <IoLogoJavascript />},
      { classe: "ReactJS", icone: <DiReact /> },
    ],
    link: "https://jankencards.vercel.app/",
    repo: "https://github.com/Artu-Dev/rps-front",
  },
  {
    nome: "JanKenCards (Back)",
    img: images.jankencardsIMG,
    desc: "Este é o servidor back-end do jogo de \"pedra, papel e tesoura\" com cartas. Foi desenvolvido utilizando Socket.io, Express e Node.js para fornecer suporte às funcionalidades do jogo.",
    tech: [
      { classe: "NodeJs", icone: <DiNodejsSmall /> },
    ],
    link: null,
    repo: "https://github.com/Artu-Dev/JanKenCards-BACK",
  },
  {
    nome: "ChernoChat",
    img: images.chernoChatIMG,
    desc: "ChernoChat é um site de chat anônimo desenvolvido com tecnologias modernas como socket.io e node.js, os usuários podem entrar em uma sala geral de bate-papo e conversar com outras pessoas sem precisar se registrar, apenas fornecer um Apelido.",
    tech: [
      { classe: "JavaScript", icone: <IoLogoJavascript />},
      { classe: "NodeJs", icone: <DiNodejsSmall /> },
      { classe: "CSS", icone: <DiCss3 /> },
    ],
    link: "https://chernochat.glitch.me/",
    repo: "https://github.com/Artu-Dev/Chernochat",
  },
  {
    nome: "CadradoClimas",
    img: images.apiIMG,
    desc: "Este é um site que se conecta a um servidor que consome a API OpenWeather e retorna informações sobre o clima de uma região específica.",
    tech: [{ classe: "JavaScript", icone: <IoLogoJavascript /> }],
    link: "https://cadradoclimas.netlify.app/",
    repo: "https://github.com/Artu-Dev/Projeto-API-clima",
  },
  {
    nome: "CadradoClimas (back)",
    img: images.apiIMG,
    desc: "Este é um servidor back-end simples que consome a API do OpenWeather, mantendo a chave de API segura.",
    tech: [{ classe: "NodeJs", icone: <DiNodejsSmall /> }],
    link: null,
    repo: "https://github.com/Artu-Dev/cadradoClimas-BACK",
  },
  {
    nome: "Loja Virtual",
    img: images.storeIMG,
    desc: "Loja virtual de Cadeiras e sofas, com sistema de carrinho e localStorage.",
    tech: [
      { classe: "HTML", icone: <DiHtml5 /> },
      { classe: "JavaScript", icone: <IoLogoJavascript /> },
    ],
    link: "https://artu-dev.github.io/Cadradostore/",
    repo: "https://github.com/Artu-Dev/Cadradostore",
  },
  // {
  //   nome: "Cookie Clicker game",
  //   img: images.gameIMG,
  //   desc: "Um mini-jogo divertido e simples baseado no famoso jogo Cookie Clicker, com foco no desenvolvimento de habilidades em JavaScript.",
  //   tech: [{ classe: "JavaScript", icone: <IoLogoJavascript /> }],
  //   link: "https://artu-dev.github.io/testes/cookie%20clicker/",
  //   repo: "https://github.com/Artu-Dev/testes/tree/main/cookie%20clicker",
  // },
  {
    nome: "Dark Sand Beach Blog",
    img: images.blogIMG,
    desc: "Um blog que traz informações e curiosidades sobre uma praia de areia preta, inspirado no design de Ksenia Vovk.",
    tech: [
      { classe: "HTML", icone: <DiHtml5 /> },
      { classe: "CSS", icone: <DiCss3 /> },
    ],
    link: "https://artu-dev.github.io/Dark-beach-sand-Blog/",
    repo: "https://github.com/Artu-Dev/Dark-beach-sand-Blog",
  },
  {
    nome: "Pagina de Cadastro",
    img: images.loginIMG,
    desc: "Uma página de cadastro responsiva.",
    tech: [
      { classe: "HTML", icone: <DiHtml5 /> },
      { classe: "CSS", icone: <DiCss3 /> },
    ],
    link: "https://artu-dev.github.io/Pagina-de-Cadastro/",
    repo: "https://github.com/Artu-Dev/Pagina-de-Cadastro",
  },
  // {
  //   nome: "Galeria SASS",
  //   img: images.galeriaIMG,
  //   desc: "Galeria de fotos simples, estilisada em SASS",
  //   tech: [{ classe: "SASS", icone: <DiSass /> }],
  //   link: "https://artu-dev.github.io/testes/galeria/",
  //   repo: "https://github.com/Artu-Dev/testes/tree/main/galeria",
  // },
  // {
  //   nome: "Toxibook",
  //   img: images.login2IMG,
  //   desc: "A tela de login responsiva de uma rede social fictícia. Foi meu primeiro projeto construído com HTML e CSS.",
  //   tech: [
  //     { classe: "HTML", icone: <DiHtml5 /> },
  //     { classe: "CSS", icone: <DiCss3 /> },
  //   ],
  //   link: "https://artu-dev.github.io/Toxibook/",
  //   repo: "https://github.com/Artu-Dev/Toxibook",
  // },
];

export default Projetos