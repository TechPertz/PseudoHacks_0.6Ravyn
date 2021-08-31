import React from "react";
import TeamCard from "../Components/TeamCard";
import "../Css/Teams.scss";

function Teams() {
  return (
    <div className="loc">
      <h1>Here is your matchmaking</h1>
      <div className="inner-loc">
        <div className="filter box">
          <h1>Filters</h1>
        </div>
        <div className="main box">
          <h1>Nangia Park, Shakti Nagar</h1>
          <div className = "cal_flex">
            <span>Today</span>
            <span>Tomorrow</span>
            <span>Wednesday</span>
            <span>Thursday</span>
            <span>Friday</span>
            <span>Saturday</span>
            <span>Sunday</span>
          </div>
          <div className="main_flex">
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
