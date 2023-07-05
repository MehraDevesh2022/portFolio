import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { projectsData } from "./Data";
import "./Projects.css";
import SingleProjectCard from "./SingleProjectCard";

function Project() {
  const [search, setSearch] = useState("");

const filteredArticles = projectsData.filter((project) => {
  const searchTerm = search.toLowerCase();
  const projectNameMatch = project.projectName
    .toLowerCase()
    .includes(searchTerm);
  const projectDescMatch = project.projectDesc
    .toLowerCase()
    .includes(searchTerm);
  const tagsMatch = project.tags.some(
    (tag) => tag.toLowerCase() === searchTerm
  );


  return projectNameMatch || projectDescMatch || tagsMatch;
});

  return (
    <div className="projects">
      <h1
        style={{
          marginTop: "2.5rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
        }}
      >
        My Recent <span style={{ color: "#32CD30" }}>Projects</span>
      </h1>
      <p>
        These are some of the projects that I have been working on in my own
        time!
      </p>
      <div className="projectPage-container">
        <div className="projectPage-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search project..."
            className="search"
          />
        </div>
        <Grid
          className="project-grid"
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={3}
          
          
        >
          {filteredArticles.map((project) => (
            <SingleProjectCard
           
              key={project.id}
              id={project.id}
              name={project.projectName}
              desc={project.projectDesc}
              tags={project.tags}
              code={project.code}
              demo={project.demo}
              image={project.image}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Project;
