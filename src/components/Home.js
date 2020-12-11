// import { FiHexagon } from 'react-icons/fi';
// import IndexImage from '../images/foto_portfolio_vinicius.png';
import Typewriter from 'typewriter-effect';
import ProgressBar from './ProgressBar';

export default function Home() {
  const skills = {
    HTML5: 60,
    CSS3: 60,
    'Java Script ES6': 65,
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
    <main className="wrap-content">
      <div className="index-text-box">
        <div className="animated-text-home">
          <Typewriter
            onInit={ (typewriter) => {
              typewriter.typeString('Seja bem vindo(a)!')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
              typewriter.typeString('Sou Vinicius Buzato, Desenvolvedor front-end.')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .start();
            } }
          />
        </div>
        <section className="hard-skills">
          {Object.keys(skills).map((skill, index) => (
            <div key={ index } className="eachItem">
              <div className="skill-item">{skill}</div>
              <ProgressBar progress={ skills[skill] } />
            </div>
          ))}
        </section>
      </div>
      <div className="photo">
        {/* <img src={ IndexImage } alt="img" width="800px" /> */}
      </div>
    </main>
  );
}
