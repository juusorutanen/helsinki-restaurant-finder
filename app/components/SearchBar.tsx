import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useCallback, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from '../../styles/components/SearchInput.module.scss';

const SearchBar = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    params ? params.get('desc') : ''
  );

  const onSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const updatedQuery: any = {
        ...(params ? qs.parse(params.toString()) : {}),
        desc: searchQuery,
      };

      const url = qs.stringifyUrl(
        {
          url: '/',
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    },
    [router, searchQuery, params]
  );

  return (
    <div className={styles.searchForm}>
      <form className={styles.form} onSubmit={onSearch}>
        <input
          value={searchQuery || ''}
          onChange={(event) => setSearchQuery(event.target.value)}
          className={styles.searchField}
          placeholder="Search for restaurants..."
          type="search"
        />
        <button type="submit">
          <BiSearch fill="white" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
