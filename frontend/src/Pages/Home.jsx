import React from "react";
import vdo from "../Assets/sports.mp4";
import "../Css/Home.scss";

function Home() {
  return (
    <div className="home">
      <video loop muted autoPlay className="back_vdo">
        <source src={vdo} type="video/mp4"></source>
      </video>
      <h1>K2-F2</h1>
      <h2>Khelo Kudo Falo Fulo</h2>
      <div className="inner_home">
        <a href="/sports">
          <button>Play Now</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
