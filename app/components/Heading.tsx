"use client";
import styles from "../../styles/components/Heading.module.scss";
import classNames from "classnames";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  const headingClasses = classNames(styles.center, {
    [styles.title]: title,
    [styles.subtitle]: subtitle,
    [styles.center]: center,
    [center ? styles.center : styles.start]: true,
  });
  return (
    <div className={headingClasses}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Heading;
