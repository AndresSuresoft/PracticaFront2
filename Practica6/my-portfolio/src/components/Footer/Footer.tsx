// components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

type Link = { name: string; url: string };

type FooterProps = {
  text?: string; 
  links?: Link[];
};

const Footer: React.FC<FooterProps> = ({
  text = "Contenido footer por defecto.",
  links = [], 
}) => {
  return (
    <footer className="footer__section">
      <p>{text}</p>
      <div className="footer__links">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;