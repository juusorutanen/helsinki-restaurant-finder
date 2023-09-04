'use client'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from '../../styles/components/PaginationBar.module.scss';

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}

export default function PaginationBar({
  currentPage,
  totalPages,
}: PaginationBarProps) {
  const searchParams = useSearchParams();

  if (!searchParams) {
    return null;
  }
  const pageParam = searchParams.get('page');
  const currentPageNumber = pageParam ? parseInt(pageParam, 5) : 1;

  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 5));
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const numberedPageItems: JSX.Element[] = [];

  for (let page = minPage; page <= maxPage; page++) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page', page.toString());

    numberedPageItems.push(
      <Link
        href={{ pathname: '/', search: `?${newSearchParams.toString()}` }}
        key={page}
        className={`${styles['join-item']} ${styles.btn} ${
          currentPageNumber === page ? styles['btn-active'] : ''
        }`}
      >
        {page}
      </Link>
    );
  }

  return (
    <div className={styles.paginationBar}>
      <div className={styles.join}>
        {currentPageNumber > 1 && (
          <div className={styles.joinItem}>
            <Link
              href={{
                pathname: '/',
                search: `?${new URLSearchParams({
                  ...Object.fromEntries(searchParams),
                  page: (currentPageNumber - 1).toString(),
                }).toString()}`,
              }}
            >
              «
            </Link>
          </div>
        )}
      </div>

      <div className={styles.join}>
        {numberedPageItems.map((item, index) => (
          <div
            className={`${styles['join-item']} ${
              currentPageNumber === index + minPage ? styles['btn-active'] : ''
            }`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={styles.join}>
        {currentPageNumber < totalPages && (
          <div className={styles.joinItem}>
            <Link
              href={{
                pathname: '/',
                search: `?${new URLSearchParams({
                  ...Object.fromEntries(searchParams),
                  page: (currentPageNumber + 1).toString(),
                }).toString()}`,
              }}
            >
              »
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}



