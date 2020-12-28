// import Photo from '../images/foto_vinicius.png';
import ProgressBar from '../components/ProgressBar';

export default function About() {
  const skills = {
    HTML5: 60,
    CSS3: 60,
    JavaScript: 65,
    'Git & GitHub': 60,
    ReactJS: 60,
    'React Redux': 40,
    'React Hooks': 50,
    'Shell Script': 20,
    'React Testing Library': 30,
    'Unix/Bash': 40,
    Jest: 25,
    ESLint: 60,
    SQL: 10,
    Python: 30,
    Django: 10,
    'React Native': 10,
    C: 10,
    WordPress: 20,
    Photoshop: 60,
  };
  return (
    <main className="about">
      <div className="about-content">
        {/* <img src={ Photo } alt="vinicius Buzato" className="about-photo" /> */}
        <div className="group-about-skills">
          <div className="about-title-content-group">
            <h1 className="page-title">
              <span className="title-slash">./</span>
              Sobre
            </h1>
            <p className="text-content">
              &quot;Sou
              estudante de desenvolvimento de software na Trybe, onde já concluí o módulo
              de front-end e estou cursando back-end (1 ano de curso intensivo). Também
              estou cursando Análise e Desenvolvimento de Sistemas na Uninter, no 1° ano
              de curso.
              <br />
              <br />
              O que eu pretendo fazer pelo resto dos meus dias?
              <br />
              <br />
              Foi o que me perguntei depois de 9 anos de carreira na área da qualidade,
              na indústria automotiva. Estava estabilizado, mas não 100% feliz. Decidi
              tranformar o hobbie, que me fazia viajar por horas atrás de soluções, em
              profissão. Decidi estudar desenvolvimento de software porque isso sempre
              esteve presente em minha vida, mas não na intensidade que eu desejava. Me
              planejei e pedi demissão da antiga vida para fazer o que mais gosto.
              <br />
              <br />
              Hoje posso dizer que acertei o caminho e a decisão. Agora sigo em busca de
              oportunidades onde eu possa levar essa motivação e paixão para ajudar a
              transformar e somar dentro da equipe que eu estiver inserido.&quot;
              <br />
              <br />
              <strong className="name">Vinicius Buzato</strong>
            </p>
          </div>
          <div className="skills">
            <h2 className="page-subtitle padd-l">
              <span className="title-slash">./</span>
              Skills
            </h2>
            <section className="hard-skills">
              {Object.keys(skills).map((skill, index) => (
                <div key={ index } className="eachItem">
                  <div className="skill-item">{skill}</div>
                  <ProgressBar progress={ skills[skill] } />
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}