'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import qs from 'query-string';
import { useCallback, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from '../../styles/components/SearchInput.module.scss';
import Container from './Container';

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isFavoritesPage = pathname === '/favorites';
    if (isFavoritesPage) {
        return null;
    }
  const params = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    params ? params.get('search') || '' : ''
  );
  
  const onSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
  
      const updatedQuery: any = {
        ...(params ? qs.parse(params.toString()) : {}),
        search: searchQuery,
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

  const onSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);

    const updatedQuery: any = {
      ...(params ? qs.parse(params.toString()) : {}),
      search: newSearchQuery || undefined,
    };

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery, 
      },
      { skipNull: true }
    );

    router.push(url);
  };

  

  return (
    <Container>
    <div className={styles.searchForm}>
      <form className={styles.form} onSubmit={onSearch}>
        <input
          value={searchQuery || ''}
          onChange={onSearchQueryChange}
          className={styles.searchField}
          placeholder="Search for restaurants..."
          type="search"
        />
        <button type="submit">
          <BiSearch fill="white" />
        </button>
      </form>
    </div>
    </Container>
  );
};

export default SearchBar;


