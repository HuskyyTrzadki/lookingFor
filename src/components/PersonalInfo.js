import { useState } from "react";
import BlueButton from "./BlueButton";
import { useAuth } from "../context/AuthContext";
import styles from "./MailRegisterForm.module.scss";
import AgeSlider from "./AgeSlider";
import GenderPicker from "./GenderPicker";
import axios from "axios";
import AvatarInput from "./AvatarInput";
const PersonalInfo = ({
  setShowMailRegister,
  handleNext,
  setShowLoginCircle,
  setShowLoginForm,
}) => {
  const { handleChange, setValues, values, uploadAvatar } = useAuth();

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setAvatar(e.target.files[0]);
    } else {
      alert("please give us youre avatar");
    }
  };
  const guessGender = async (name) => {
    const result = await axios.get(`https://api.genderize.io?name=${name}`);
    setValues({
      ...values,
      ["gender"]: result.data.gender,
    });
  };
  const handleNextAndUploadAvatar = () => {
    console.log("handleNextAndUpload");
    handleNext();
    uploadAvatar(avatar);
  };
  return (
    <div
      className={err ? styles.MailLoginFormINVALID : styles.MailLoginFormVALID}
    >
      <nav className={styles.loginNavbar}>
        <h1>RegisterForm</h1>
        <div
          className={styles.close}
          onClick={() => {
            setShowLoginCircle(true);

            setShowMailRegister(false);
          }}
        ></div>
      </nav>
      <form>
        <div className={styles.txt_field}>
          <input
            type="input"
            required
            name="firstName"
            className={styles.Input}
            value={values.firstName}
            onBlur={(e) => {
              guessGender(e.target.value);
            }}
            onChange={(e) => {
              setErr("");
              handleChange(e);
            }}
          />
          <span></span>
          <label>firstName</label>
        </div>
        <div className={styles.txt_field}>
          <input
            required
            type="input"
            defaultValue={values.secondName}
            className={styles.Input}
            value={values.lastName}
            name="lastName"
            onChange={(e) => {
              setErr("");
              handleChange(e);
            }}
          />
          <span></span>

          <label>lastName</label>
        </div>

        <AgeSlider />

        <GenderPicker />
        <AvatarInput handleImage={handleImage} />

        {err !== "" && <p>{err}</p>}
        <div className={styles.signIn_link}>
          <h6
            onClick={() => {
              setShowLoginForm(true);
              setShowMailRegister(false);
            }}
          >
            Already have an account? login here!
          </h6>
        </div>
        <BlueButton
          disabled={loading}
          event={handleNextAndUploadAvatar}
          content="next"
          isBig="true"
          directionOfArrow="right"
        />
      </form>
      {console.log(err)}
      {err === ""}
    </div>
  );
};
//jak sprawdzic czy mail sie zgadza bez wysylania requesta o rejestracje
export default PersonalInfo;
