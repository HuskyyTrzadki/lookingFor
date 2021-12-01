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
import lock from "../assets/lock.png";
import football from "../assets/Sport/football.png";
import tennis from "../assets/Sport/tennis.png";
import volleyball from "../assets/Sport/volleyball.png";
import math from "../assets/Studying/math.png";
import styles from "./AddNewPostPage.module.scss";
import IT from "../assets/Studying/IT.png";
import CategoryPhoto from "./CategoryPhoto";
import {
  TextField,
  Box,
  FormControl,
  createTheme,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import { red } from "@mui/material/colors";

const AddNewPost = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#42a5f5",
      },
    },
  });
  const limit = 40;

  const { where } = useParams();
  const [howManyCharactersLeft, setHowManyCharactersLeft] = useState(limit);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [values, setValues] = useState({
    category: "",
    shortDescription: "",
    longDescription: "",
    authentication: true,
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
    if (e.target.name === "shortDescription") {
      setValues({
        ...values,
        ["shortDescription"]: e.target.value,
      });
      setHowManyCharactersLeft(limit - values.shortDescription.length);
    } else if (e.target.name === "longDescription") {
      setValues({
        ...values,
        ["longDescription"]: e.target.value,
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
      console.log(values);
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
            sx={{ border: "2.5vw solid white" }}
            label={`short description, ${howManyCharactersLeft} chars left`}
            placeholder="type short description of event"
            multiline
            className={styles.text}
            onChange={onTextAreaChange}
            name="shortDescription"
            color="primary"
            value={values.shortDescription}
            inputProps={{ maxLength: limit + 1 }}
          />
          <TextField
            sx={{ border: "2.5vw solid white" }}
            label={`long description `}
            placeholder="type short description of event"
            multiline
            className={styles.text}
            onChange={onTextAreaChange}
            name="longDescription"
            color="primary"
            value={values.longDescription}
            inputProps={{ maxLength: 700 }}
          />
        </div>
        <div className={styles.auth}>
          <FormControl component="fieldset" sx={{ marginTop: "10px" }}>
            <FormLabel
              sx={{ textAlign: "center", color: "white", marginBottom: "10px" }}
              component="legend"
            >
              Gender
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="controlled-radio-buttons-group"
              value={values.authentication}
              onChange={onTextAreaChange}
            >
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="with auth (recommended)"
                name="authentication"
              />
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="without auth"
                name="authentication"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </main>
    </>
  );
};
export default AddNewPost;
