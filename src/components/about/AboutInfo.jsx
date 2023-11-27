import React ,{useEffect ,useState} from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/coder.svg";
import GitHubCalendar from "react-github-calendar";
import Experience from "./Experince";
import Tools from "./Tools";
const AboutInfo = () => {
  
   const [width, setWidth] = useState(window.innerWidth);

   useEffect(() => {
     const handleResize = () => {
       setWidth(window.innerWidth);
     };

     window.addEventListener("resize", handleResize);

     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);

   const getRowLength = () => {
     if (width >= 1000) {
       return 16;
     } else {
       return 14;
     }
   };
  
   const getFontLength = () =>{
     if (width >= 1000) {
       return 16;
     } else  if(width > 800 && width < 1000){
       return 14;
     }
     else {
        return 12;
     }
   }
  
  return (
    <div className="about">
      <h1 className="about-heading">
        <span style={{ color: "#32CD30" }}>About</span> Me
      </h1>
      <div className="about-parent">
        <div className="about-text">
          <p style={{ textAlign: "justify" }}>
            Hi people, I am{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Devesh Mehra
            </span>{" "}
            from Uttarakhand,India. I did my B.Tech in Computer Science and
            Engineering from{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>NPSEI</span>{" "}
            and currently I'm looking for opnings for{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              {" "}
              Software development{" "}
            </span>
            Roles & along with that I'm learning{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Next.js {""}
            </span>
            fullstack framework.
          </p>
          <br></br>
          <p style={{ textAlign: "justify" }}>
            Apart from developement, some things I like are<br></br>
            <br></br>
            <ul>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Exploring tech-stuff
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Watching Anime
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Reading Manga
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Combate Sport's
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Travelling
              </li>
            </ul>
          </p>
        </div>
        <img
          className="rounded about-image"
          src={codeImage}
          alt="Extra large avatar"
        ></img>
      </div>

      {/* experience */}
      <div style={{ paddingTop: "2rem" }}>
        <Experience />
      </div>

      <TechStack />

      <Tools />

      <h1 className="graph-heading">
        {/* Tools */}
        My <span style={{ color: "#32CD30" }}>Github</span> Contribution Graph
      </h1>
      <br></br>
      <div className="github-graph">
        <GitHubCalendar
          style={{ marginBottom: "50px" }}
          username="MehraDevesh2022"
          blockMargin={4}
          blockSize={getRowLength()}
          fontSize={getFontLength()}
          color={"#32CD30"}
        />
      </div>
    </div>
  );
};

export default AboutInfo;
