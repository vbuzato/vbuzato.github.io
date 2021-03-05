import Typewriter from 'typewriter-effect';
// import BgVideo from '../components/BgVideo';

export default function Home() {
  return (
    <main className="wrap-content">
      {/* <BgVideo /> */}
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
                .typeString('Sou Vinicius Buzato, <br />Desenvolvedor Full-Stack.')
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
