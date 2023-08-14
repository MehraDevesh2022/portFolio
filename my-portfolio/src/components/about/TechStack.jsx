import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import { FaCuttlefish } from "react-icons/fa";
import {
  SiMui,
  SiChakraui,
  SiTypescript,
 SiPostgresql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";





const TechStack = () => {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="techstack">
      <h1>
        My{" "}
        <span
          style={{
            color: "#32CD30",
            marginTop: "3rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
          }}
        >
          SkillSet
        </span>
      </h1>
      <div className="techstack-row">
        <Card.Group itemsPerRow={width > 450 ? 6 : 2}>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <FaCuttlefish
              style={{
                width: "50%",
                height: "auto",

                color: "#FFFFFF",
              }}
            />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiJava style={{ width: "60%", height: "auto", color: "red" }} />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiJavascript1
              style={{ width: "60%", height: "auto", color: "#FFC300" }}
            />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiTypescript
              style={{
                width: "60%",
                height: "auto",
                backgroundColor: "#FFFFFF",
                color: "#007ACC",          
              }}
            />
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiHtml5
              style={{
                width: "60%",
                height: "auto",

                color: "#E34F26",
              }}
            />
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiCss3
              style={{ width: "60%", height: "auto", color: "#1572B6" }}
            />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiReact
              style={{ width: "60%", height: "auto", color: "#61DBFB" }}
            />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiMui style={{ width: "60%", height: "auto", color: "#1976D2" }} />
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiChakraui
              style={{ width: "60%", height: "auto", color: "#3182CE" }}
            />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiNodejs
              style={{ width: "60%", height: "auto", color: "green" }}
            />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiMongodb
              style={{ width: "60%", height: "auto", color: "green" }}
            />
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiPostgresql
              style={{ width: "60%", height: "auto", color: "#336791" }}
            />
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};




export default TechStack; 
