import { SearchBar } from '../components/SearchBar.tsx';
import { CountriesList } from '../components/CountriesList.tsx';
import { useCountriesSearch } from '../hooks/use-countries-search.ts';

const CountriesSearchContainer = () => {
  const { countries, error, phrase, setPhrase } = useCountriesSearch();

  const hasResults = Boolean(countries?.length);
  return (
    <div style={{ width: '100%' }} className="w-full max-w-1280 h-full">
      <SearchBar value={phrase} onChange={setPhrase} />
      <div className="mt-20">
      {hasResults ? (
        <CountriesList countries={countries} />
      ) : (
        <div>
          <p>{error || 'No countries found'}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default CountriesSearchContainer;
