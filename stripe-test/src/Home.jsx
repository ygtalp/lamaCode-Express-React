import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "green",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            textDecoration: "none",
          }}
          to="pay"
        >
          Go To Payment
        </Link>
      </div>
     
    </>
  );
};

export default Home;
