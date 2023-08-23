import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href="https://github.com/mustafa-khaled" target="_blank">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/mustafa-khaled" target="_blank">
            <i className="fa-brands fa-pinterest"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/mustafa-khaled" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
      <p>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/mustafa-khaled" target="_blank">
          Mustafa Khaled
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
