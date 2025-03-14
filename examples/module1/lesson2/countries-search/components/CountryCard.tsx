import type { Country } from '../types/country.ts';

interface CountryCardProps {
  country: Country;
}

export const CountryCard = (props: CountryCardProps) => {
  const { country } = props;

  if (!country) {
    return <></>;
  }

  return (
    <div className="flex gap-4 w-full min-h-40 border border-gray-200 p-4 justify-items-center align-center flex-col">
      <p data-testid="country-name" className="font-semibold">{country.name?.common}</p>
      <img className="w-full max-w-100%" alt={`${country.name?.common} flag`} src={country.flags?.png} />
      <p>Population: <span data-testid="country-population">{country.population}</span></p>
    </div>
  )
}