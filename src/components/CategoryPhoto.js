import { useMemo, memo } from "react";
import styles from "./CategoryPhoto.module.scss";

const CategoryPhoto = memo(
  ({ photoSrc, onClick, values, photoName }) => {
    const generateLightColorHex = () => {
      let color = "#";
      for (let i = 0; i < 3; i++)
        color += (
          "0" +
          Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
        ).slice(-2);
      return color;
    };
    const hexColor = useMemo(() => generateLightColorHex(), []);
    return (
      <li>
        <img
          className={` ${styles.CategoryPhoto} ${
            photoName === values.category ? styles.border : ""
          }`}
          alt="categoryPhoto"
          src={photoSrc}
          style={{
            "background-color": hexColor,
          }}
          onClick={onClick}
        ></img>
      </li>
    );
  }
);
export default CategoryPhoto;
