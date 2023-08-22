import React from "react";
import expGreen from "../../assets/expGreen.svg";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";


function Experience() {

    const experienceData = [
      {
        id: 1,
        company: "Globex Corporation",
        jobtitle: "Frontend Developer",
        startYear: "2018",
        endYear: "2019",
        links: "https://www.linkedin.com/",
      },
      {
        id: 2,
        company: "Vehement Capital Partners",
        jobtitle: "Backend Developer",
        startYear: "2019",
        endYear: "2020",
        links: "https://www.linkedin.com/",
      },
      {
        id: 3,
        company: "Wonka Industries",
        jobtitle: "Marketing",
        startYear: "2020",
        endYear: "Present",
        links: "https://www.linkedin.com/",
      },
    ];

  return (
    <div className="experience" id="experience">
      <div className="experience-body">
        <div className="experience-image">
          <img src={expGreen} alt="expGreen" />
        </div>
        <div className="experience-description">
          <h1 className="experience-title">
            <span style={{ color: "#32CD30" }}>Work</span> Experience
          </h1>
          {experienceData.map((exp) => (
            <a
              href={exp.links}
              key={exp.id}
              className="experience-tag"
              
            >
              <ExperienceCard
                key={exp.id}
                id={exp.id}
                jobtitle={exp.jobtitle}
                company={exp.company}
                startYear={exp.startYear}
                endYear={exp.endYear}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
