import styles from '../../../styles/components/Search.module.scss'
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles.searchFlex}>
                
                <div className={styles.searchBox}>
                    <div>
                        Search
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