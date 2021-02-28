import { FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Form from '../components/Form';

export default function Contact() {
  return (
    <div className="standard-content">
      <h1 className="page-title">
        <span className="title-slash">./</span>
        Contato
      </h1>
      <div className="wrap-contact">
        <div className="contact-info">
          <p className="text-contact">
            Olá! Você pode me enviar uma mensagem por aqui ou entrar
            em contato comigo através de uma das minhas redes.
          </p>
          <img className="gif" src="https://media.giphy.com/media/SWVvc60hK5uDKEiIGL/giphy.gif" alt="gif" />
          <div className="contact-icons">
            <a href="https://tinyurl.com/y82urbse" target="_blank" rel="noreferrer">
              <FaWhatsapp size="40" className="contact-icon" />
            </a>
            <a href="https://github.com/vbuzato" target="_blank" rel="noreferrer">
              <FaGithub size="40" className="contact-icon" />
            </a>
            <a href="https://www.linkedin.com/in/viniciusbuzato/" target="_blank" rel="noreferrer">
              <FaLinkedinIn size="40" className="contact-icon" />
            </a>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}
