import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h2>Todo</h2>
      <div>
        <i className="fa-solid fa-sun"></i>
        {/* <i className="fa-solid fa-moon"></i> */}
      </div>
    </div>
  );
}

export default Header;
