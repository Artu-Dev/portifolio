import images from "../../../assets/images.jsx";
import { skills } from "../../Skills/Skills.jsx";

const Projetos = [
  {
    nome: "RandomBeats",
    img: images.randomBeatsIMG,
    desc: "O RandomBeats é um site simples que permite ouvir em um momento totalmente aleatorio qualquer áudio enviado pelo usuário.",
    tech: [
      skills.react,
      skills.typescript,
      skills.css,
    ],
    link: "https://random-beats.vercel.app/",
    repo: "https://github.com/Artu-Dev/RandomBeats",
  },
  {
    nome: "Toxibook (FRONT)",
    img: images.toxibookIMG,
    desc: "Toxibook é uma rede social inspirada no Twitter, baseada em MERN stack (MongoDB, Express, React e Node.js). Projeto feito utilizando varias bibliotecas e tecnologias",
    tech: [
      skills.react,
      skills.css,
    ],
    link: "https://toxibook.vercel.app/",
    repo: "https://github.com/Artu-Dev/ToxibookFRONT",
  },
  {
    nome: "Toxibook (BACK)",
    img: images.toxibookIMG,
    desc: "Componente de backend da rede social Toxibook, desenvolvido com Node.js. Responsável pelo processamento de dados e interações com o banco de dados. ",
    tech: [
      skills.nodejs
    ],
    link: null,
    repo: "https://github.com/Artu-Dev/ToxibookBACK",
  },
  {
    nome: "JanKenCards (Front)",
    img: images.jankencardsIMG,
    desc: "JanKenCards é um jogo de de \"pedra papel tesoura\" utilizando cartas, foi desenvolvido utiliando Socket.io e React",
    tech: [
      skills.react,
      skills.javascript,
    ],
    link: "https://jankencards.vercel.app/",
    repo: "https://github.com/Artu-Dev/rps-front",
  },
  {
    nome: "JanKenCards (Back)",
    img: images.jankencardsIMG,
    desc: "Este é o servidor back-end do jogo de \"pedra, papel e tesoura\" com cartas. Foi desenvolvido utilizando Socket.io, Express e Node.js para fornecer suporte às funcionalidades do jogo.",
    tech: [
      skills.nodejs
    ],
    link: null,
    repo: "https://github.com/Artu-Dev/JanKenCards-BACK",
  },
  {
    nome: "ChernoChat",
    img: images.chernoChatIMG,
    desc: "ChernoChat é um site de chat anônimo desenvolvido com tecnologias modernas como socket.io e node.js, os usuários podem entrar em uma sala geral de bate-papo e conversar com outras pessoas sem precisar se registrar, apenas fornecer um Apelido.",
    tech: [
      skills.javascript,
      skills.nodejs,
      skills.css,
    ],
    link: "https://chernochat.glitch.me/",
    repo: "https://github.com/Artu-Dev/Chernochat",
  },
  {
    nome: "CadradoClimas",
    img: images.apiIMG,
    desc: "Este é um site que se conecta a um servidor que consome a API OpenWeather e retorna informações sobre o clima de uma região específica.",
    tech: [skills.javascript],
    link: "https://cadradoclimas.netlify.app/",
    repo: "https://github.com/Artu-Dev/Projeto-API-clima",
  },
  {
    nome: "CadradoClimas (back)",
    img: images.apiIMG,
    desc: "Este é um servidor back-end simples que consome a API do OpenWeather, mantendo a chave de API segura.",
    tech: [skills.javascript],
    link: null,
    repo: "https://github.com/Artu-Dev/cadradoClimas-BACK",
  },
  {
    nome: "Loja Virtual",
    img: images.storeIMG,
    desc: "Loja virtual de Cadeiras e sofas, com sistema de carrinho e localStorage.",
    tech: [
      skills.javascript,
      skills.html,
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
      skills.html,
      skills.css,
    ],
    link: "https://artu-dev.github.io/Dark-beach-sand-Blog/",
    repo: "https://github.com/Artu-Dev/Dark-beach-sand-Blog",
  },
  {
    nome: "Pagina de Cadastro",
    img: images.loginIMG,
    desc: "Uma página de cadastro responsiva.",
    tech: [
      skills.html,
      skills.css,
    ],
    link: "https://artu-dev.github.io/Pagina-de-Cadastro/",
    repo: "https://github.com/Artu-Dev/Pagina-de-Cadastro",
  },
  {
    nome: "Galeria SASS",
    img: images.galeriaIMG,
    desc: "Galeria de fotos simples, estilisada em SASS",
    tech: [skills.sass],
    link: "https://artu-dev.github.io/testes/galeria/",
    repo: "https://github.com/Artu-Dev/testes/tree/main/galeria",
  },
];

export default Projetos