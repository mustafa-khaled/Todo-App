import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles["cart-container"]}>
      <div className={styles.card}>
        <div>22</div>
      </div>
      <p>Hours</p>
    </div>
  );
}

export default Card;
