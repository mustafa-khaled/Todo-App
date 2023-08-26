import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/darkModeSlice";
import { useEffect } from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import styles from "./Header.module.css";

function Header() {
  const dispatch = useDispatch();
  // custom Hook to save dark mode in local storage
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "darkMode"
  );

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    dispatch(setTheme(!isDarkMode));
  };

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
