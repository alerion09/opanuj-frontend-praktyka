import type { Country } from '../types/country.ts';

interface CountriesListProps {
  countries: Country[];
}

export const CountriesList = (props: CountriesListProps) => {
  const { countries } = props;

  if (!countries?.length) {
    return <></>;
  }

  return (
    <div>
      {countries.map((country) => (
        <div>{country.name?.common}</div>
      ))}
    </div>
  );
};
