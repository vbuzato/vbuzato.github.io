import ProgressBar from '../components/ProgressBar';

export default function About() {
  const skills = {
    HTML5: 60,
    CSS3: 60,
    JavaScript: 70,
    'Git & GitHub': 60,
    ReactJS: 60,
    'React Redux': 40,
    'React Context': 50,
    NodeJS: 65,
    Express: 60,
    'API REST': 60,
    SQL: 30,
    MongoDB: 30,
    'Jest/RTL': 30,
    Jest: 25,
    ESLint: 60,
    Python: 30,
    Django: 10,
    'React Native': 10,
    C: 10,
    'Shell Script': 20,
    'Unix/Bash': 40,
    WordPress: 20,
    Photoshop: 60,
  };
  return (
    <main className="about">
      <div className="about-content">
        <div className="group-about-skills">
          <div className="about-title-content-group">
            <h1 className="page-title">
              <span className="title-slash">./</span>
              Sobre
            </h1>
            <p className="text-content">
              Front-end por 5 anos e 2 anos de desenvolvimento fullstack, mais 9 anos de
              profissão na indústria automotiva (metrologia e geometria). Hoje, sigo
              ampliando conhecimentos nessa motivadora jornada de desenvolvimento de
              software.
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
