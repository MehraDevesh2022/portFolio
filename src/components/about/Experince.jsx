import React from "react";
import expGreen from "../../assets/expGreen.svg";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experienceData = [
    {
      id: 1,
      company: "Indusfly Technologies Pvt. Ltd.",
      jobtitle: "Fullstack Developer Intern",
      startYear: "May 2023 ",
      endYear: "Oct 2023",
      links:
        "https://drive.google.com/file/d/1vfzaNxc0kb06VoIDoxsadx4uPlyIC3dT/view",
    },
    {
      id: 2,
      company: "Pepcoding Education (OPC) Private Ltd.",
      jobtitle: "Software Development Intern",
      startYear: "Sep 2022 ",
      endYear: " Apr 2023",
      links:
        "https://drive.google.com/file/d/1WExV0iHcNiVC8No0Y6f5PMmRDJ-lrtTc/view?usp=drive_link",
    },
    {
      id: 3,
      company: "The Sparks Foundation",
      jobtitle: "Web Development Intern",
      startYear: "May 2022 ",
      endYear: " Jun 2022",
      links:
        "https://drive.google.com/file/d/1PDnFM5IYxz-KcsdFtLcNCOWe9kioRnxr/view?usp=sharing",
    },
    {
      id: 4,
      company: "NPSEI",
      jobtitle: "Frontend Developer Intern",
      startYear: "Aug 2021 ",
      endYear: " Nov 2021",
      links:
        "https://drive.google.com/file/d/1UQsz7aq8ZtF_WrgZNMQlaNK1xA-kjO15/view?usp=drive_link",
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
            <a href={exp.links} key={exp.id} className="experience-tag">
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
