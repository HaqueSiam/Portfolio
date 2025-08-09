import React from 'react';
import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg'; // Adjust the path as necessary
import profile_img from '../../assets/Rounded.png'; // Adjust the path as necessary
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a highly motivated full-stack web developer with a solid foundation in creating scalable, intuitive, and high-performance web applications. From clean frontend designs to robust backend systems, I love crafting seamless digital experiences that not only work efficiently but also leave a lasting impression.</p>
                <p>What sets me apart is my obsession with detail and continuous learning. I thrive in fast-paced environments, embrace challenges, and believe that great code is both elegant and maintainable.  My goal? To build impactful tech that makes life easier, smarter, and more connected.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>Nodejs</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Mongodb</p><hr style={{width:"70%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Academic</h1>
            <p>Have been listed to Dean's list two times and VC list one time</p></div>
            <hr /><div className="about-achievement">
            <h1>4+</h1>
            <p>PROJECTS COMPLETED</p></div></div>  
    </div>

    );
}

export default About;