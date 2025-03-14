import type { Country } from '../types/country.ts';

export const sortAlphabetically = (countries: Country[]) => {
  if (!countries?.length) {
    return []
  }

  return [...countries].sort((a, b) =>
    a.name?.common?.localeCompare(b.name?.common)
  );
}