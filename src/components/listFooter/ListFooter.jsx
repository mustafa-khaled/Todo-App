import { useDispatch, useSelector } from "react-redux";
import styles from "./ListFooter.module.css";
import { deleteCompletedTodos } from "../../redux/todoSlice";

function ListFooter() {
  const dispatch = useDispatch();
  // Get List Items
  const listItems = useSelector((state) => state.todos.todos.length);

  function clearCompleted() {
    dispatch(deleteCompletedTodos());
  }
  return (
    <div className={styles["list-footer"]}>
      <div>{listItems} Item Left</div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default ListFooter;
