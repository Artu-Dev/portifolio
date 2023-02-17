import "./AboutSecondary.css";
import fotoEu from '../../../img/eueueueu.png';
import { Bar } from '../../layout/bar/Bar';

export const AboutSecondary = () => {
  return (
    <>
      <div id='about'>
        <div className="about_image">
          <img src={fotoEu} alt="" />
        </div>
        <h1>Sobre mim</h1>
        <p>
          Olá! Meu nome é Artur, tenho 19 anos e  me considero determinado e focado em resolver problemas. Um dos meus principais pontos fortes é a capacidade de persistir em um problema até encontrarmos uma solução. Acredito que, com dedicação e trabalho duro, podemos superar qualquer obstáculo.
        </p>
        <p>
          Eu sou apaixonado por tecnologia e adoro desafios. Quando me deparo com um problema, encaro isso como uma oportunidade de aprendizado e crescimento.
        </p>
      </div>
    </>
  )
}
