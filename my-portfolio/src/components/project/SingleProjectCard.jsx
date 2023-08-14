import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";


import "./SingleProject.css";

function SingleProject({ id, name, desc, tags, code, demo, image }) {
  console.log(name);
  const useStyles = makeStyles((theme) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 50,
      border: `2px solid ""`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: "",
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid `,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className="singleProject">
        <div className="projectContent">
          <h2 id={name.replace(" ", "-").toLowerCase()}>{name}</h2>
          <img
            src={
              image
                ? image
                : "https://via.placeholder.com/300x200.png?text=No+Image+Available"
            }
            alt={name}
          />
          <div className="project--showcaseBtn">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                className={classes.icon}
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-code`}
            >
              <FaCode
                id={`${name.replace(" ", "-").toLowerCase()}-code`}
                className={classes.icon}
                aria-label="Code"
              />
            </a>
          </div>
        </div>
        <p
          className="project--desc"
      
        >
          {desc}
        </p>
        <div
          className="project--lang"
        
        >
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default SingleProject;
