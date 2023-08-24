import Background from "../background/background";
import Header from "../header/Header";
import Input from "../input/Input";
import TodoList from "../todoList/TodoList";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles["app-layout"]}>
      <Background />
      <main>
        <Header />
        <Input />
        <TodoList />
      </main>
    </div>
  );
}

export default AppLayout;
