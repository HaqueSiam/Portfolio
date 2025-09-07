import React from 'react';
import "./mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id='work' className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="decorative theme pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="mywork-item">
              <img src={work.w_img} alt={`Project ${index + 1}`} />
            </div>
          )
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow" />
      </div>
    </div>
  );
}

export default MyWork;