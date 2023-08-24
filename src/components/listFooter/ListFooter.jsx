import styles from "./ListFooter.module.css";

function ListFooter() {
  return (
    <div className={styles["list-footer"]}>
      <div>X Item Left</div>
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
