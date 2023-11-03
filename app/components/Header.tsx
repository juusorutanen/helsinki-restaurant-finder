"use client";

import styles from "../../styles/components/Header.module.scss";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import Categories from "./navbar/Categories";

const Header = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <h1>
          Find your <span>favorite</span> restaurants from Helsinki
        </h1>
        <h2>All in one place</h2>
      </div>
      <div className={styles.container}>
        <SearchBar />
        <Categories />
      </div>
    </div>
  );
};

export default Header;
