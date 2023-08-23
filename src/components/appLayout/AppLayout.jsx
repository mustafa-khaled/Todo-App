import Footer from "../footer/Footer";
import Header from "../header/Header";
import Timer from "../timer/Timer";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles["app-layout"]}>
      <Header />
      <Timer />
      <Footer />
    </div>
  );
}

export default AppLayout;
