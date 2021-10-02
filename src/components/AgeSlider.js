import { useState } from "react";
import Slider from "@mui/material/Slider";
import { color } from "@mui/system";
import { red } from "@mui/material/colors";
import { useAuth } from "../context/AuthContext";

const AgeSlider = () => {
  const { handleChange, values } = useAuth();

  return (
    <>
      <p style={{ color: values.age < 16 ? "#de0b66" : "black" }}>
        {values.age < 16 ? "age(i m sorry, youre too young)" : "age"}
      </p>

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
    </>
  );
};
export default AgeSlider;
