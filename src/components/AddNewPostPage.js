import { useParams } from "react-router";
import { useState, useMemo, memo } from "react";
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
import styles from "./AddNewPostPage.module.scss";
import IT from "../assets/Studying/IT.png";

const AddNewPost = () => {
  const { where } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");

  const generateLightColorHex = () => {
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += (
        "0" +
        Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
      ).slice(-2);
    return color;
  };
  const Categories = {
    Sport: [
      [tennis, "tennis"],
      [volleyball, "volleyball"],
      [basketball, "basketball"],
      [badminton, "badminton"],
      [football, "football"],
    ],
    Party: [
      [hardParty, "hardParty"],
      [prom, "prom"],
      [dancing, "dancing"],
    ],
    Study: [
      [math, "math"],
      [IT, "IT"],
    ],
    Adventure: [
      [mountain, "mountain"],
      [motorcycle, "motorycle"],
      [zaGraniczne, "zaGraniczne"],
    ],
  };
  const CategoryPhoto = memo(({ photoSrc, onClick }) => {
    const hexColor = useMemo(() => generateLightColorHex(), []);

    return (
      <li>
        <img
          alt="categoryPhoto"
          src={photoSrc}
          style={{
            "background-color": hexColor,
          }}
          onClick={onClick}
        ></img>
      </li>
    );
  });

  // The rest of your rendering logic
  return (
    <>
      <Navbar text={"AddNewPost"} />
      <h1>pick a cathegory:</h1>
      <ul className={styles.CategoriesChoices}>
        {Categories[where].map((item, index) => (
          <CategoryPhoto
            key={item[index]}
            photoSrc={item[0]}
            onClick={() => setSelectedCategory(item[1])}
          />
        ))}
      </ul>
    </>
  );
};
export default AddNewPost;
