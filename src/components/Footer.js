const LINKS = [
  { label: "GitHub", href: "https://github.com/JeongsuPark-dev" },
  { label: "Source", href: "https://github.com/JeongsuPark-dev/JeongsuPark-dev.github.io" },
  { label: "Email", href: "mailto:integer613@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__brand">
            Built with <span className="footer__brand-accent">React</span> · Deployed on GitHub Pages
          </p>
          <div className="footer__links">
            {LINKS.map((link) => (
              <a
                key={link.label}
                className="footer__link"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="footer__copy">© {year} Jeongsu Park. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
