import { useEffect, useState } from 'react';
import type { Country } from '../types/country.ts';
import { sortByPopulationDesc } from '../methods/sort-by-population-desc.ts';
import { sortAlphabetically } from '../methods/sort-alphabetically.ts';
import { SortOption } from '../types/sort-option.ts';
import { FilterOption } from '../types/filter-option.ts';
import { fetchCountries } from '../api/fetch-countries.ts';

export const useCountriesSearch = () => {
  const PER_PAGE = 6;
  const [countries, setCountries] = useState<Country[]>([]);
  const [phrase, setPhrase] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [sort, setSort] = useState<SortOption>('alphabetical');
  const [filter, setFilter] = useState<FilterOption>('name');
  const [page, setPage] = useState<number>(1);

  const totalPages = Math.ceil(countries?.length / PER_PAGE);
  const startSlice = (page - 1) * PER_PAGE;
  const endSlice = startSlice + PER_PAGE;
  const pagedCountries = countries?.slice(startSlice, endSlice);

  useEffect(() => {
    (async () => {
      setError('');
      setSort('alphabetical');
      let result: Country[] = [];
      try {
        result = await fetchCountries(phrase, filter);
      } catch (e) {
        setError(
          e instanceof Error
            ? e.message
            : 'Something goes wrong.. Please try again'
        );
      }
      setCountries(sortAlphabetically(result));
      setPage(1);
    })();
  }, [phrase, filter]);

  useEffect(() => {
    if (!countries?.length) {
      return;
    }

    switch (sort) {
      case 'alphabetical': {
        const sorted = sortAlphabetically(countries);
        setCountries(sorted);
        return;
      }
      case 'population': {
        const sorted = sortByPopulationDesc(countries);
        setCountries(sorted);
        return;
      }
      default: {
        return;
      }
    }
  }, [sort]);

  return {
    countries: pagedCountries,
    error,
    filter,
    page,
    phrase,
    sort,
    totalCountries: countries?.length || 0,
    totalPages,
    setFilter,
    setPage,
    setPhrase,
    setSort,
  };
};
