import { useState } from "react";
import Slider from "@mui/material/Slider";

const AgeSlider = ({ values, handleChange }) => {
  return (
    <>
      <p>Age</p>

      <Slider
        name="age"
        onChange={(e) => {
          handleChange(e);
          console.log(values);
        }}
        min={10}
        max={40}
        defaultValue={20}
        aria-label="default"
        valueLabelDisplay="auto"
      />
      {values.age < 16 && <p>i m sorry youre too young</p>}
    </>
  );
};
export default AgeSlider;
