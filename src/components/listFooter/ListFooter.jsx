import { useDispatch, useSelector } from "react-redux";
import styles from "./ListFooter.module.css";
import { deleteCompleted } from "../../redux/todoSlice";

function ListFooter() {
  const dispatch = useDispatch();
  // Get List Items
  const listItems = useSelector((state) => state.todos.length);

  return (
    <div className={styles["list-footer"]}>
      <div>{listItems} Item Left</div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>
        <button onClick={() => dispatch(deleteCompleted())}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default ListFooter;
