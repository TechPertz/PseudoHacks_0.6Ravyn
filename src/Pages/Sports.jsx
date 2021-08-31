import React from "react";
import "../Css/sports.scss";
import Card from "../Components/Card";
import badminton from "../Assets/badminton.jpg";
import football from "../Assets/football.jpg";
import cricket from "../Assets/cricket.jpg";
function Sports() {
  return (
    <div className="sports">
      <h1>Sports Around You </h1>
      {/* enter you location */}
      <div className="card_list">
        <Card game="CRICKET" image={cricket} teams={4}></Card>
        <Card game="FOOTBALL" image={football} teams={2}></Card>
        <Card game="BADMINTON" image={badminton} teams={3}></Card>
      </div>
    </div>
  );
}

export default Sports;
