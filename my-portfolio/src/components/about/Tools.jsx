import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGit,
  SiFigma,
  SiCanva,
  SiFirebase,
} from "react-icons/si";

// import { VscTerminalCmd } from "react-icons/vsc";


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
        <Card.Group itemsPerRow={width > 750 ? 8 : 1}>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiVisualstudiocode
              style={{ width: "60%", height: "auto", color: "#007ACC" }}
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
              style={{ width: "60%", height: "auto", color: "#FF6C37" }}
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
            <SiGit style={{ width: "60%", height: "auto", color: "#FF6C37" }} />
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiFigma
              style={{ width: "60%", height: "auto", color: "#d4acc4  " }}
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
            <SiCanva
              style={{ width: "60%", height: "auto", color: "#00C4CC    " }}
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
              style={{ width: "60%", height: "auto", color: "#36c5f0 " }}
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
            <SiFirebase
              style={{ width: "60%", height: "auto", color: "#FFA611 " }}
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
            <SiVercel
              style={{ width: "60%", height: "auto", color: "#000000 " }}
            />
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

export default Tools;
