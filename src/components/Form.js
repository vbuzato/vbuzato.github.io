import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Form() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [okMsg, setokMsg] = useState(false);
  const [errorMsg, seterrorMsg] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_kk7al69', 'template_vfod72y',
      e.target, 'user_2PyK1otYJnsJh29NIBL8L')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setname('');
        setemail('');
        setmessage('');
        setokMsg(true);
      }, (error) => {
        console.log('FAILED...', error);
        seterrorMsg(true);
      });
  }

  return (
    <form id="contact-form" className="contact-form" onSubmit={ sendEmail }>
      {okMsg && <p className="success-msg">Mensagem enviada com sucesso!</p>}
      {errorMsg && (
        <p className="error-msg">
          A mensagem não pôde ser enviada.
          <br />
          Por favor, tente novamente.
        </p>)}
      <input
        type="text"
        name="name"
        placeholder="Nome"
        onChange={ (e) => setname(e.target.value) }
        value={ name }
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        onChange={ (e) => setemail(e.target.value) }
        value={ email }
        required
      />
      <textarea
        type="textarea"
        name="message"
        placeholder="Mensagem"
        onChange={ (e) => setmessage(e.target.value) }
        value={ message }
        required
      />
      <button type="submit" className="bt-send">Enviar</button>
    </form>
  );
}
