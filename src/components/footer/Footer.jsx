import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Micyio Solutions</div>
      <div className={styles.text}>
        Micyio Solutions © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
