import { useSelector } from "react-redux";
import styles from "./ListFooter.module.css";

function ListFooter() {
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
        <button>Clear Completed</button>
      </div>
    </div>
  );
}

export default ListFooter;
