import React from "react";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function valuetext(value) {
  return `${value} m`;
}

export default function DiscreteSlider() {
  return (
    <div style={{ width: "80%", backgroundColor:"white", padding:"10px", borderRadius: "10px"}}>
      <Typography id="discrete-slider" gutterBottom>
        Distance
      </Typography>
      <Slider
        defaultValue={300}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={100}
        marks
        min={100}
        max={1000}
      />
    </div>
  );
}
