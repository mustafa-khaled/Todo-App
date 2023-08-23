import styles from "./Timer.module.css";
import Card from "../card/Card";

function Timer() {
  return (
    <main className={styles.timer}>
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
}

export default Timer;
