import Slider from "@mui/material/Slider";

import { useAuth } from "../context/AuthContext";

const CustomizedSlider = ({type,handleChangeInNrOfPeople}) => {
  const { handleChange, values } = useAuth();

  return (
    <>
      {type==="age"&&<div>
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

      </div>}
      {type==="nrOfPeopleNeeded"&&<div>
      <p>
        number of people needed for event
      </p>

      <Slider
        name="nrOfPeople"
        onChange={(e) => {
          handleChangeInNrOfPeople(e);
        }}
        min={2}
        max={20}
        defaultValue={5}
        aria-label="default"
        valueLabelDisplay="auto"
      />

      </div>}
      
    
    </>
  );
};
export default CustomizedSlider;
