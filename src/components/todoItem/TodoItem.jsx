import { toggleCompleted } from "../../redux/todoSlice";
import styles from "./TodoItem.module.css";
import { useDispatch } from "react-redux";

function TodoItem({ todo }) {
  const { id, title, completed } = todo;
  const dispatch = useDispatch();

  function handleCompletedClick() {
    dispatch(
      toggleCompleted({
        id: id,
        completed: !completed,
      })
    );
  }

  return (
    <div
      className={`${styles["todo-item"]} ${completed ? styles.completed : ""}`}
      onClick={handleCompletedClick}>
      <div
        className={`${styles["checkbox"]} ${
          completed ? styles.completed : ""
        }`}></div>
      {title}
    </div>
  );
}

export default TodoItem;
