import Link from "next/link";
import styles from "../../styles/components/PaginationBar.module.scss";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

export default function PaginationBar({
  currentPage,
  totalPages,
}: PaginationBarProps) {
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const numberedPageItems: JSX.Element[] = [];

  for (let page = minPage; page <= maxPage; page++) {
    numberedPageItems.push(
      <Link
        href={"?page=" + page}
        key={page}
        className={`${styles["join-item"]} ${styles.btn} ${
          currentPage === page ? styles["btn-active"] : ""
        }`}
      >
        {page}
      </Link>
    );
  }

  return (
    <>
    <div className={styles.paginationBar}>
  <div className={`${styles.join} ${styles["block"]} ${styles["sm:hidden"]}`}>
    {currentPage > 1 && (
      <div className={`${styles["join-item"]} ${styles.btn}`}>
        <Link href={"?page=" + (currentPage - 1)}>«</Link>
      </div>
    )}
  </div>

  <div className={styles.join}>
    {numberedPageItems.map((item, index) => (
      <div
        className={`${styles["join-item"]} ${currentPage === index + minPage ? styles["btn-active"] : ""}`}
        key={index}
      >
        <Link href={"?page=" + (index + minPage)}>{index + minPage}</Link>
      </div>
    ))}
  </div>

  <div className={`${styles.join} ${styles["block"]} ${styles["sm:hidden"]}`}>
    {currentPage < totalPages && (
      <div className={`${styles["join-item"]} ${styles.btn}`}>
        <Link href={"?page=" + (currentPage + 1)}>»</Link>
      </div>
    )}
  </div>
</div>

    </>
  );
}
