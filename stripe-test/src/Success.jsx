import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Success = () => {
  return (
    <div>
      <h1>
        Your <u>test</u> payment has been made successfully!
      </h1>
      <h3 style={{ textAlign: "end" }}>Thank you.</h3>
      <h5 style={{ textAlign: "end" }}>
        <i>— LamaCode</i>
      </h5>
      <div style={{textAlign:"center"}}>
        <a style={{color:"white",textDecoration:"none", display:"inline-grid", fontWeight:"600"}}
          href="https://github.com/ygtalp/lamaCode-Express-React"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="6x" color="white" />See in Github
        </a>
      </div>
    </div>
  );
};

export default Success;
