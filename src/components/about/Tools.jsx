import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";


const Tools = () => {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="techstack">
      <h1>
        Tools i{" "}
        <span
          style={{
            color: "#32CD30",
            marginTop: "3.5rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
          }}
        >
           use
        </span>
      </h1>
      <div className="techstack-row">
        <Card.Group itemsPerRow={width > 750 ? 5 : 1}>
 
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiVisualstudiocode
              style={{ width: "60%", height: "auto", color: "red" }}
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
            <SiPostman
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
            <SiSlack
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
            <SiMacos style={{ width: "60%", height: "auto", color: "green" }} />
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiVercel
              style={{ width: "60%", height: "auto", color: "green" }}
            />
          </Card>
      
        </Card.Group>
      </div>
    </div>
  );
};

export default Tools;
