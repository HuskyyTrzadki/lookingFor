import styles from "./ButtonArrow.module.scss";

function ButtonArrow() {
  return (
    <div className={styles.arrow}>
      <div className={styles.arrowTop}></div>
      <div className={styles.arrowBottom}></div>
    </div>
  );
}
export default ButtonArrow;
