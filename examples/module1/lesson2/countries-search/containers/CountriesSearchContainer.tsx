import { SearchBar } from '../components/SearchBar.tsx';
import { CountriesList } from '../components/CountriesList.tsx';
import { useCountriesSearch } from '../hooks/use-countries-search.ts';
import { SortSelect } from '../components/SortSelect.tsx';
import { Pagination } from '../components/Pagination.tsx';
import { FilterSelect } from '../components/FilterSelect.tsx';

const CountriesSearchContainer = () => {
  const { countries, error, filter, page, phrase, sort, totalCountries, totalPages, setFilter, setPhrase, setSort, setPage } = useCountriesSearch();

  const hasResults = Boolean(countries?.length);

  return (
    <div style={{ width: '100%' }} className="w-full max-w-1280 h-full flex items-center flex-col">
      <SearchBar placeholder={`Search by country's ${filter}...`} value={phrase} onChange={setPhrase} />
      <div className="mt-4 w-full">
        <div className="flex gap-4">
          <SortSelect onChange={setSort} value={sort} />
          <FilterSelect value={filter} onChange={setFilter} />
        </div>
      </div>
      <div className="mt-14 mb-14">
      {hasResults ? (
        <CountriesList countries={countries} totalCountries={totalCountries} />
      ) : (
        <div>
          <p>{error}</p>
        </div>
      )}
      </div>
      <Pagination page={page} onChange={setPage} totalPages={totalPages} />
    </div>
  );
};

export default CountriesSearchContainer;
