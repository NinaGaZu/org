import "./Footer.css"

const Footer = () => {
  return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
    <div className="redes">
      <a href="http://www.aluracursos.com/">
        <img src="/img/facebook.png" alt="Facebook" />
      </a>
      <a href="http://www.aluracursos.com/">
        <img src="/img/twitter.png" alt="twitter" />
      </a>
      <a href="http://www.aluracursos.com/">
        <img src="/img/instagram.png" alt="instsagram" />
      </a>
    </div>
    <img src="/img/Logo.png" alt="org" />
    <strong>Desarrollado por Alura</strong>
  </footer>
}

export default Footer