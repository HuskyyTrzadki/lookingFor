import { useParams } from "react-router";
import Navbar from "./Navbar";
import mountain from "../assets/Adventure/mountain";
import motorcycle from "../assets/Adventure/motorcycle";
import intercontinental from "../assets/Adventure/intercontinental";
import prom from "../assets/Partying/prom";
import hardParty from "../assets/Partying/hardParty";
import dancing from "../assets/Partying/dancing";
import badminton from "../assets/Sport/badminton";
import basketball from "../assets/Sport/basketball";
import football from "../assets/Sport/football";
import tennis from "../assets/Sport/tennis";
import volleyball from "../assets/Sport/volleyball";
import math from "../assets/Studying/math";
import IT from "../assets/studying/IT";

const AddNewPost = () => {
  const { where } = useParams();
  const ArrayOfCategories = [];

  return (
    <>
      <Navbar />
    </>
  );
};
export default AddNewPost;
