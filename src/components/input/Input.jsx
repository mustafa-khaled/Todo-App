import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import styles from "./Input.module.css";

function Input() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function onBlur() {
    if (!value) return null;
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue("");
  }
  // Trigger  Enter Click
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onBlur();
    }
  }

  return (
    <div className={styles.input}>
      <div></div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Create a new todo"
        className={styles["new-todo"]}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Input;
