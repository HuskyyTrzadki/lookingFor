import styles from "./GenderPicker.module.scss";
import woman from "../assets/woman.svg";
import man from "../assets/man.svg";
import { useAuth } from "../context/AuthContext";
const GenderPicker = () => {
  const { handleChange, values } = useAuth();

  const isRadioSelected = (value) => {
    return value === values.gender;
  };
  const handleRadioClick = (e) => {
    handleChange(e);
  };

  return (
    <div className={styles.GenderPicker}>
      <div>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={isRadioSelected("female")}
          onChange={handleRadioClick}
        ></input>
        <img src={woman} alt="woman"></img>
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={isRadioSelected("male")}
          onChange={handleRadioClick}
        ></input>
        <img src={man} alt="man"></img>
      </div>
    </div>
  );
};
export default GenderPicker;
