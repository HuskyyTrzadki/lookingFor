import styles from "./ButtonArrow.module.scss";

function ButtonArrow({ direction }) {
  return (
    <div className={styles[direction]}>
      <div className={styles.arrow}>
        <div className={styles.arrowTop}></div>
        <div className={styles.arrowBottom}></div>
      </div>
    </div>
  );
}
export default ButtonArrow;
