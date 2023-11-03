"use client";

import styles from "../../styles/components/Footer.module.scss";
import ClientOnly from "./ClientOnly";

const Footer = () => {
  return (
    <ClientOnly>
      <div className={styles.footer}>
        <p>2023 Helsinki Restaurant Finder</p>
      </div>
    </ClientOnly>
  );
};

export default Footer;
