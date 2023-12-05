function Footer() {
  return (
    <footer className="container">
      <div className="contact-btns">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:mariahweardev@gmail.com"
          className="btn btn-dark col"
        >
          Email Me
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mariahw4"
          className="btn btn-dark col"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mariah-wear/"
          className="btn btn-dark col"
        >
          LinkedIn
        </a>
      </div>
      Made by Mariah with <span className="heart"> ❤</span> and React
    </footer>
  );
}

export default Footer;
