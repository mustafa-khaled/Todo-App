import styles from "./Input.module.css";

function Input() {
  return (
    <div className={styles.input}>
      <div></div>
      <input type="text" placeholder="Create a new todo" />
    </div>
  );
}

export default Input;
