import React from 'react'
import cricket_team from "../Assets/cricket_team.jpg"
function TeamCard() {
    return (
        <div className="team-card">
            <div className="inner_team_image">
                <img src={cricket_team}></img>
            </div>
            <div className="inner_team_content">
                <h4> Team 1</h4>
                <h5>24th August, 2021</h5>
                <h6>6PM</h6>
                <div className="cal_flex" style={{paddingTop:"4vh"}}>
                    <span className = "tot">50 Total</span>
                    <span className = "vac">28 Vacant</span>
                    <span className="fil">22 Filled</span>
                    <button style={{width:"50%"}}>JOIN THEM</button>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
