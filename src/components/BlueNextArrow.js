import styles from "./BlueNextArrow.module.scss";

function BlueNextArrow() {
  return (
    <div className={styles.arrow}>
      <div className={styles.arrowTop}></div>
      <div className={styles.arrowBottom}></div>
    </div>
  );
}
export default BlueNextArrow;
