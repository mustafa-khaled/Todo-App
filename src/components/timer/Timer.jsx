import { useEffect, useState } from "react";
import styles from "./Timer.module.css";
import Card from "../card/Card";

const Timer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 8);

  const startTimer = () => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalId);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <main className={styles.timer}>
      <Card title="Days" value={days} />
      <Card title="Hours" value={hours} />
      <Card title="Minutes" value={minutes} />
      <Card title="Seconds" value={seconds} />
    </main>
  );
};

export default Timer;
