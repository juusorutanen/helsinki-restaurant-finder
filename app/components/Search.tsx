'use client';

import styles from '../../styles/components/Search.module.scss';
import { BiSearch } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

const Search = () => {
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    const isFavoritesPage = pathname === '/favorites';

    if (!isMainPage && !isFavoritesPage) {
        return null;
    }
    return (
        <div className={styles.search}>
            <div className={styles.searchFlex}>
                
                <div className={styles.searchBox}>
                    <div>
                        Search for places
                    </div>
                    <div className={styles.searchIcon}>
                    <BiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;