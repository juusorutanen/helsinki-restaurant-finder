"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "../../styles/components/SearchInput.module.scss"

const SearchInput = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <div className={styles.searchForm}>
      <form className={styles.form} onSubmit={onSearch}>
          <input
            value={searchQuery || ""}
            onChange={(event) => setSearchQuery(event.target.value)}
            className={styles.searchField}
            placeholder="Search for restaurants..."
            type="search"
          />
          <button type="submit"><BiSearch fill="white"/></button>
      </form>
      </div>
      
  );
};

export default SearchInput;

