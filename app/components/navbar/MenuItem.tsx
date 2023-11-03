"use client";
import styles from "../../../styles/components/MenuItem.module.scss";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div onClick={onClick} className={styles.labelContainer}>
      {label}
    </div>
  );
};

export default MenuItem;
