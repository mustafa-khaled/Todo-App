import styles from "./TodoList.module.css";
import TodoItem from "../todoItem/TodoItem";
import ListFooter from "../listFooter/ListFooter";

function TodoList() {
  return (
    <div className={styles["todo-list"]}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <ListFooter />
    </div>
  );
}

export default TodoList;
