import { useParams } from "react-router";
import { useState } from "react";
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
import CategoryPhoto from "./CategoryPhoto";

const AddNewPost = () => {
  const { where } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");

  function Category(url, name) {
    this.url = url;
    this.name = name;
  }
  const Categories = {
    Sport: [
      new Category(tennis, "tennis"),
      new Category(volleyball, "volleyball"),
      new Category(basketball, "basketball"),
      new Category(badminton, "badminton"),
      new Category(football, "football"),
    ],
    Party: [
      new Category(hardParty, "hardParty"),
      new Category(prom, "prom"),
      new Category(dancing, "dancing"),
    ],
    Study: [new Category(math, "math"), new Category(IT, "IT")],
    Adventure: [
      new Category(mountain, "mountain"),
      new Category(motorcycle, "motorcycle"),
      new Category(zaGraniczne, "zaGraniczne"),
    ],
  };

  return (
    <>
      <Navbar text={"AddNewPost"} />
      <h1>pick a cathegory:</h1>
      {selectedCategory}
      <ul className={styles.CategoriesChoices}>
        {Categories[where].map((item, index) => (
          <CategoryPhoto
            selectedCategory={selectedCategory}
            photoName={item.name}
            key={index}
            photoSrc={item.url}
            onClick={() => setSelectedCategory(item.name)}
          />
        ))}
      </ul>
    </>
  );
};
export default AddNewPost;
