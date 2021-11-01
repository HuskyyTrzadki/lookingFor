import styles from "./AdditionButton.module.scss";
import { Link } from "react-router-dom";

const AdditionButton = () => {
  const location = window.location.pathname;
  console.log(location);
  return (
    <Link to={`/AddNewPost${location}`}>
      <button title="add new Post" className={styles.plus}></button>
    </Link>
  );
};
export default AdditionButton;
