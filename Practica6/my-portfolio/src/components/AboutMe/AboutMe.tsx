import React from 'react';
import './AboutMe.css';

type AboutMeProps = {
  title?: string;
  description: string;
  image?: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ 
  title = "About Me", 
  description, 
  image 
}) => {
  return (
    <section className="about__content">
      {image && <img src={image} alt={title} className="about__image" />}
      <div className="about__text">
        <h2>{title}</h2>
        <p className="about__title">{description}</p>
      </div>
    </section>
  );
};

export default AboutMe;

