export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__links">
            <a
              className="footer__link"
              href="https://github.com/JeongsuPark-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer__link"
              href="https://github.com/JeongsuPark-dev/JeongsuPark-dev.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
          <p className="footer__copy">© {year} Jeongsu Park. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
