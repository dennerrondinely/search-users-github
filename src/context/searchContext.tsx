import React, { createContext, ReactNode, useContext, useState } from 'react';

type SearchContextType = {
  query: string | null;
  setQuery(query: string | null): void;
};

type SearchProviderProps = {
  children: ReactNode;
};

const SearchContext = createContext<SearchContextType>({
  query: null,
  setQuery: () => null
});

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [query, setQuery] = useState<string | null>(null);
  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

export default SearchProvider;
