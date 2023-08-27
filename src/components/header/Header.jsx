import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import { setTheme } from "../../redux/darkModeSlice";
import { useEffect } from "react";

function Header() {
  const isDarkMode = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  function handleToggleTheme() {
    dispatch(setTheme(!isDarkMode));
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={styles.header}>
      <h2>Todo</h2>
      <div onClick={() => handleToggleTheme()}>
        {isDarkMode ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </div>
    </div>
  );
}

export default Header;
