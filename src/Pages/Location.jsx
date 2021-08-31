import React from 'react'
import "../Css/loc.scss"
import "../Components/LocCard"
import LocCard from '../Components/LocCard'
import Slid from "../Components/Range_slider"
function Location() {
    return (
        <div className="loc">
            <h1>Here is your matchmaking</h1>
            <div className="inner-loc">
                <div className="filter box">
                    <h1>Filters</h1>
                    <Slid></Slid>

                </div>
                <div className="main box">
                    <h1>Places</h1>
                    <div className="main_flex">
                     <LocCard/>
                     <LocCard/>
                     <LocCard/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location
