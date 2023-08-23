import styles from "./Card.module.css";

function Card({ title, value }) {
  return (
    <div className={styles["cart-container"]}>
      <div className={styles.card}>
        <div>{value < 10 && value !== "00" ? `0${value}` : value}</div>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Card;
