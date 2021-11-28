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
import { TextField, Box, FormControl } from "@mui/material";

const AddNewPost = () => {
  const limit = 20;

  const { where } = useParams();
  const [howManyWordsLeft, setHowManyWordsLeft] = useState(limit);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [values, setValues] = useState({
    category: "",
    shortDescription: "",
    longDescription: "",
    verificationNeeded: true,
    where,
  });
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
  const onTextAreaChange = (e) => {
    const howManyWordsInShortDecription =
      values.shortDescription.split(" ").length;
    if (
      e.target.name === "shortDescription" &&
      howManyWordsInShortDecription < limit
    ) {
      setValues({
        ...values,
        ["shortDescription"]: e.target.value,
      });
      setHowManyWordsLeft(limit - howManyWordsInShortDecription);
    } else if (
      e.target.name === "longDescription" &&
      values.longDescription.split(" ").length < 150
    ) {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      <Navbar text={"AddNewPost"} />
      <main>
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
        <div className={styles.textContainer}>
          <TextField
            label={`short description, ${howManyWordsLeft} words left`}
            placeholder="type short description of event"
            multiline
            className={styles.xd}
            onChange={onTextAreaChange}
            name="shortDescription"
            color="secondary"
            value={values.shortDescription}
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </div>
      </main>
    </>
  );
};
export default AddNewPost;
