import React from "react";
import ground from "../Assets/grass.jpg";
import slots from "../Assets/Slots.png";
function LocCard() {
  return (
    <div className="locCard">
      <div className="inner_locCard_1">
        <img src={ground}></img>
      </div>
      <div className="inner_locCard_2">
        <p>
          Nangia Park, Shakti Nagar <span>FREE</span>
        </p>
        <img src={slots}></img>
        <a href="/teams">
          <button>Know More</button>
        </a>
      </div>
    </div>
  );
}

export default LocCard;
