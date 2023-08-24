import styles from "./TodoItem.module.css";

function TodoItem() {
  return (
    <div className={styles["todo-item"]}>
      <div className={styles["checkbox"]}></div>
      This Is An Item In The List
    </div>
  );
}

export default TodoItem;
