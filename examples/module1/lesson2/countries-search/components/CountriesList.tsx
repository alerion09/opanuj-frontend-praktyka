import type { Country } from '../types/country.ts';
import { CountryCard } from './CountryCard.tsx';

interface CountriesListProps {
  countries: Country[];
  totalCountries: number;
}

export const CountriesList = (props: CountriesListProps) => {
  const { countries, totalCountries } = props;

  if (!countries?.length) {
    return <></>;
  }

  return (
    <div className="w-full">
      <p className="mb-4 text-left">
        Results: {totalCountries}
      </p>
      <div className="grid grid-cols-3 gap-4">
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
      </div>
  );
};
