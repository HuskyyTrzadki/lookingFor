import { useParams } from "react-router";
import Navbar from "./Navbar";
import mountain from "../assets/Adventure/mountain.png";
import motorcycle from "../assets/Adventure/motorcycle.png";
import zaGraniczne from "../assets/Adventure/zaGraniczne.png";
import prom from "../assets/Partying/prom.png";
import hardParty from "../assets/Partying/hardParty.png";
import dancing from "../assets/Partying/dancing.png";
import badminton from "../assets/Sport/badminton.png";
import basketball from "../assets/Sport/basketball.png";
import football from "../assets/Sport/football.png";
import tennis from "../assets/Sport/tennis.png";
import volleyball from "../assets/Sport/volleyball.png";
import math from "../assets/Studying/math.png";
import IT from "../assets/Studying/IT.png";

const AddNewPost = () => {
  const { where } = useParams();
  const Cathegories = {
    Sport: [tennis, volleyball, basketball, badminton, football],
    Party: [hardParty, prom, dancing],
    Study: [math, IT],
    Adventure: [mountain, motorcycle, zaGraniczne],
  };

  return (
    <>
      <Navbar />
      pick a cathegory:
      {Cathegories[where].map((item) => {
        return <img src={item}></img>;
      })}
    </>
  );
};
export default AddNewPost;
