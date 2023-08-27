import { useDispatch, useSelector } from "react-redux";
import styles from "./ListFooter.module.css";
import { deleteCompletedTodos, setFilter } from "../../redux/todoSlice";

function ListFooter() {
  const dispatch = useDispatch();
  // Get List Items
  const listItems = useSelector((state) => state.todos.todos.length);

  function clearCompleted() {
    dispatch(deleteCompletedTodos());
  }

  function allTodos() {
    dispatch(setFilter("All"));
  }

  function activeTodos() {
    dispatch(setFilter("Active"));
  }

  function completedTodos() {
    dispatch(setFilter("Completed"));
  }

  return (
    <div className={styles["list-footer"]}>
      <div>{listItems} Item Left</div>
      <div>
        <button onClick={allTodos}>All</button>
        <button onClick={activeTodos}>Active</button>
        <button onClick={completedTodos}>Completed</button>
      </div>
      <div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default ListFooter;
