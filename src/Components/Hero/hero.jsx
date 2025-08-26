import React from 'react';
import "./hero.css";
import profile_img from '../../assets/profile_img.png'; // Adjust the path as necessary
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="profile image" />
      <h1><span>I'm Mohammad Mahmudul Haque Siam,</span> Full-Stack developer</h1>
      <p>I'm a passionate and detail-oriented full stack developer with a strong focus on building modern, user-friendly web applications. I take pride in writing maintainable code and creating meaningful user experiences.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
    )
}

export default Hero;