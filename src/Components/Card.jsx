import React from "react";

function Card({ game, image, teams }) {
  var mystyle = {
    background: `linear-gradient(360deg, rgba(0, 0, 0, 0.2) 8.87%, rgba(0, 0, 0, 0.038) 81.11%), url(${image})`,
    backgroundSize: "cover",
  };

  return (
    <div className="card" style={mystyle}>
      <h2>{game}</h2>
      <h3>{teams}</h3>
      <h4>Teams waiting for you</h4>
      <div className="cen">
        <a href={game}>
          <button>Find More</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
