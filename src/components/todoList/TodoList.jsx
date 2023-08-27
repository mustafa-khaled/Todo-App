import TodoItem from "../todoItem/TodoItem";
import ListFooter from "../listFooter/ListFooter";
import styles from "./TodoList.module.css";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className={styles["todo-list"]}>
      {todos?.length > 0 &&
        todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      <ListFooter />
    </div>
  );
}

export default TodoList;
