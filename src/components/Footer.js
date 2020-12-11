export default function Footer() {
  return (
    <footer>
      <form className="contact-form">
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <textarea type="textarea" placeholder="Mensagem" />
        <button type="button">Enviar</button>
      </form>
    </footer>
  );
}
