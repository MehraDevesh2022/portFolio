

import React from "react";
import { NavLink } from "react-router-dom";
import TypeAnimation from "./TypeAnimation";
import HomeBottomPage from "./HomeBottomPage";
import developer from "../../assets/developer.svg";
import resumePdf from "../../assets/Resume_Devesh.pdf";
import { Button, makeStyles } from "@material-ui/core";

 const useStyles = makeStyles((t) => ({
   resumeContainer: {
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     gap: "2rem",
     marginTop: "4rem",
     [t.breakpoints.down("sm")]: {
       marginTop: "2rem",
     },
   },
   resumeBtn: {
     color: "white",
     borderRadius: "30px",
     textTransform: "inherit",
     textDecoration: "none",
     width: "150px",
     fontSize: "1.2rem",

     height: "50px",
     fontWeight: "bold",
     border: `3px solid #F2F2F2`,
     transition: "100ms ease-out",
     "&:hover": {
       backgroundColor: "#10265ddc",
       boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.5)",
       color: "#32CD30",
       border: `3px solid #10265ddc`,
     },
     [t.breakpoints.down("sm")]: {
       width: "180px",
     },
   },
   contactBtn: {
     backgroundColor: "#10265ddc",
     boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.5)",
     color: "#32CD30",
     fontWeight: "bold",
     borderRadius: "30px",
     textTransform: "inherit",
     textDecoration: "none",
     width: "150px",
     height: "50px",
     fontSize: "1.2rem",
     transition: "100ms ease-out",
     "&:hover": {
       backgroundColor: "#152b61",
       color: "white",
       border: `3px solid white`,
     },
     [t.breakpoints.down("sm")]: {
       display: "none",
     },
   },
 }));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className="home">
      <div className="home-parent">
        <div className="home-content">
          <div className="heading-text">
            <h1
              style={{
                fontFamily: "Fira Code",
                fontSize: "2.5rem",
                position: "static",
              }}
              className="home-animation"
            >
              HI
            </h1>
            <h1
              className="home-animation"
              style={{
                fontFamily: "Fira Code",
                fontSize: "2.5rem",
                position: "static",
              }}
            >
              I'M{" "}
              <span
                style={{
                  color: "#32CD30",
                  position: "static",
                  textDecoration: "",
                }}
              >
                DEVESH MEHRA
              </span>
            </h1>
          </div>

          <div className="text-animation">
            <TypeAnimation />
          </div>
          {/* resume dowload and contact button */}
          <div className={classes.resumeContainer}>
            {resumePdf && (
              <a
                href={resumePdf}
                download="resume"
                target="_blank"
                rel="noreferrer"
              >
                <Button className={classes.resumeBtn}>Download CV</Button>
              </a>
            )}
            <NavLink to="/contact" smooth={true} spy="true" duration={2000}>
              <Button className={classes.contactBtn}>Contact</Button>
            </NavLink>
          </div>
        </div>

        <img
          className="rounded w-36 h-36 homepage-avatar"
          src={developer}
          alt="Extra large avatar"
        ></img>
      </div>

      <HomeBottomPage />
    </div>
  );
};

export default HomePage;
