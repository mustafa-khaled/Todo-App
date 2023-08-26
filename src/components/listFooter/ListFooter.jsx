import { useSelector } from "react-redux";
import styles from "./ListFooter.module.css";
import { getNotCompleted } from "../../redux/todoSlice";

function ListFooter() {
  // Get Not Completed Items
  const notCompleted = useSelector(getNotCompleted);

  return (
    <div className={styles["list-footer"]}>
      <div>{notCompleted.length} Item Left</div>
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
