import Background from "../background/background";
import Header from "../header/Header";
import Input from "../input/Input";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles["app-layout"]}>
      <Background />
      <main>
        <Header />
        <Input />
      </main>
    </div>
  );
}

export default AppLayout;
