// import { FiHexagon } from 'react-icons/fi';
// import IndexImage from '../images/foto_portfolio_vinicius.png';
// import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import BgVideo from '../components/BgVideo';

export default function Home() {
  // const [mySkills, setmySkills] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     // setmySkills(true);
  //   }, 7000);
  // }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     const ramdomNumbers = 20;
  //     document.querySelectorAll('.box-photo-home')[ramdomNumbers]
  //       .style.background = 'transparent';
  //   }, 1000);
  // }, []);
  return (
    <main className="wrap-content">
      <BgVideo />
      <div className="photo" />
      <div className="index-text-box">
        <div className="animated-text-home">
          <Typewriter
            onInit={ (typewriter) => {
              typewriter.typeString('Seja bem-vindo(a)!')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
              typewriter
                .typeString('Sou Vinicius Buzato, <br />Desenvolvedor front-end.')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .start();
            } }
          />
        </div>

      </div>

    </main>
  );
}
