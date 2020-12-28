import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiJest } from 'react-icons/si';
import AppReceitas from '../images/app-receitas.png';
import AppReceitas2 from '../images/app-receitas2.png';
import Nasa from '../images/hackathon-nasa.png';

export default function Portfolio() {
  return (
    <div className="standard-content">
      <h1 className="page-title">
        <span className="title-slash">./</span>
        Portfólio
      </h1>
      <div className="job-box">
        <h2 className="job-title">App de Receitas</h2>
        <div className="job-desc-techs">
          <p className="job-description">
            Este projeto se trata de um app que tem como objetivo consumir uma API de
            receitas e disponizá-las aos usuários. Foram criadas diversas funcionalidades
            como filtros por comidas, drinks, ingredientes específicos, opções para
            favoritar receitas, salvar receitas, utilizar o app no andamento da receita e
            armazenar as receitas concluídas. Também possui validação de e-mail e senha
            na tela de login conforme regra de negócio. Projeto feito em grupo de 4
            pessoas dentro das exigências do curso da Trybe. Aprendemos muito, com certeza
            foi um projeto ótimo de planejar e codar.
          </p>
          <div className="techs-box">
            <div className="used-tech">
              <FaReact />
              <span className="tech">ReactJS</span>
            </div>
            <div className="used-tech">
              <FaReact />
              <span className="tech">Context API</span>
            </div>
            <div className="used-tech">
              <SiJavascript />
              <span className="tech">JavaScript</span>
            </div>
            <div className="used-tech">
              <FaHtml5 />
              <span className="tech">HTML</span>
            </div>
            <div className="used-tech">
              <FaCss3Alt />
              <span className="tech">CSS</span>
            </div>
            <div className="used-tech">
              <SiJest />
              <span className="tech">Jest</span>
            </div>
          </div>
        </div>
        <div className="group-bts-thumb">
          <div className="job-box-thumb">
            <img src={ AppReceitas } alt="App de Receitas" className="job-thumb" />
            <img src={ AppReceitas2 } alt="App de Receitas" className="job-thumb" />
          </div>
          <div className="job-buttons">
            <button type="button" className="bt-job-view border-rad-bot-left">
              Visualizar projeto
            </button>
            <button type="button" className="bt-job-view border-rad-bot-right">
              Ver código do projeto
            </button>
          </div>
        </div>
      </div>

      <div className="job-box">
        <h2 className="job-title">Hackathon da NASA 2020</h2>
        <div className="job-desc-techs">
          <p className="job-description">
            Este foi meu primeiro Hackathon, e o objetivo era demonstrar a funcionalidade
            de encontrar satélites próximos ao local definido no campo de busca. Neste
            projeto foi utilizado JS puro, consumo de APIs da Nasa, de geolocalização e de
            conversão de nomes de cidades para coordenadas geográficas. Com certeza valeu
            o aprendizado!
          </p>
          <div className="techs-box">
            <div className="used-tech">
              <SiJavascript />
              <span className="tech">JavaScript</span>
            </div>
            <div className="used-tech">
              <FaHtml5 />
              <span className="tech">HTML</span>
            </div>
            <div className="used-tech">
              <FaCss3Alt />
              <span className="tech">CSS</span>
            </div>
          </div>
        </div>
        <div className="group-bts-thumb">
          <div className="job-box-thumb">
            <img src={ Nasa } alt="Hackathon da NASA 2020" className="job-thumb" />
          </div>
          <div className="job-buttons">
            <button type="button" className="bt-job-view border-rad-bot-left">
              Visualizar projeto
            </button>
            <button type="button" className="bt-job-view border-rad-bot-right">
              Ver código do projeto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
