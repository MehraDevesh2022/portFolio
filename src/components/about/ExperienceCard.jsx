import React from "react";

import Fade from "react-reveal/Fade";
import expImgWhite from "../../assets/expImgWhite.svg";
import "./Experience.css";

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
  return (
    <Fade bottom>
      <div key={id} className="experience-card">
        <div className="expcard-img">
          <img src={expImgWhite} alt="expImgWhite" />
        </div>
        <div className="experience-details">
          <h6>
            {startYear}-{endYear}
          </h6>
          <h4>{jobtitle}</h4>
          <h5>{company}</h5>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
