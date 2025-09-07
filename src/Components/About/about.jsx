import React from 'react';
import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
  const skills = [
    { name: 'HTML & CSS', percentage: 80 },
    { name: 'React', percentage: 50 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'Node.js', percentage: 80 },
    { name: 'MongoDB', percentage: 80 }
  ];

  const achievements = [
    {
      title: 'Academic',
      description: 'Have been listed to Dean\'s list two times'
    },
    {
      title: '4+',
      description: 'Projects Completed'
    }
  ];

  return (
    <section id='about' className="about">
      <div className="about-title">
        <h2>About me</h2>
        <img src={theme_pattern} alt="Decorative theme pattern" />
      </div>
      
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a highly motivated full-stack web developer with a solid foundation in creating 
              scalable, intuitive, and high-performance web applications. From clean frontend designs 
              to robust backend systems, I love crafting seamless digital experiences that not only 
              work efficiently but also leave a lasting impression.
            </p>
            <p>
              What sets me apart is my obsession with detail and continuous learning. I thrive in 
              fast-paced environments, embrace challenges, and believe that great code is both elegant 
              and maintainable. My goal? To build impactful tech that makes life easier, smarter, 
              and more connected.
            </p>
          </div>
          
          <div className="about-skills">
            <h3 className="skills-title">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="about-skill">
                <p>{skill.name}</p>
                <div className="skill-bar">
                  <hr 
                    style={{ width: `${skill.percentage}%` }} 
                    aria-label={`${skill.name} proficiency: ${skill.percentage}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="about-achievements">
        {achievements.map((achievement, index) => (
          <React.Fragment key={index}>
            <div className="about-achievement">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
            {index < achievements.length - 1 && <hr className="achievement-divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default About;