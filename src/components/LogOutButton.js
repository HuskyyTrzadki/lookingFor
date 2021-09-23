import styles from "./LogOutButton.module.scss";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const LogOutButton = () => {
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      alert("cos poszlo nie tak");
      console.log(error);
    }
  }
  return (
    <button className={styles.LogOutButton} onClick={handleLogout}>
      logout
    </button>
  );
};
export default LogOutButton;
