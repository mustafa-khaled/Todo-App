import { toggleCompleted, deleteTodo } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";
import styles from "./TodoItem.module.css";

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

  function handleDeleteClick() {
    dispatch(deleteTodo({ id: id }));
  }

  return (
    <div className={`${styles["todo-item"]} `}>
      <div
        onClick={handleCompletedClick}
        className={`${completed ? styles.completed : ""}`}>
        <div
          className={`${styles["checkbox"]} ${
            completed ? styles.completed : ""
          }`}></div>

        {title}
      </div>

      <i className="fa-solid fa-xmark" onClick={handleDeleteClick}></i>
    </div>
  );
}

export default TodoItem;
