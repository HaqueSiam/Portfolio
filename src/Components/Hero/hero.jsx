import React from 'react';
import "./hero.css";
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <section id='home' className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profile_img} alt="Mohammad Mahmudul Haque Siam - Full Stack Developer" />
        </div>
        
        <div className="hero-text">
          <h1>
            <span className="hero-name">I'm Mohammad Mahmudul Haque Siam,</span> 
            <span className="hero-title">Full-Stack Developer</span>
          </h1>
          
          <p className="hero-description">
            I'm a passionate and detail-oriented full stack developer with a strong focus on 
            building modern, user-friendly web applications. I take pride in writing maintainable 
            code and creating meaningful user experiences.
          </p>
          
          <div className="hero-action">
            <AnchorLink 
              className='hero-connect anchor-link' 
              offset={50} 
              href='#contact'
              aria-label="Connect with Mohammad Mahmudul Haque Siam"
            >
              Connect with me
            </AnchorLink>
            <a 
              className="hero-resume" 
              href="/assets/Mohammad_Mahmudul_Haque_Siam_CV.pdf"
              download="Mohammad_Mahmudul_Haque_Siam_CV.pdf"
              role="button"
              aria-label="Download Mohammad Mahmudul Haque Siam's Resume"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;