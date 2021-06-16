import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Home</h1>
      <Link
        className="btn btn-info my-3"
        to={{
          pathname: "/quis",
        }}
      >
        Quis
      </Link>
    </div>
  );
}

export default Home;
