import type { Country } from '../types/country.ts';

export const sortByPopulationDesc = (countries: Country[]) => {
  if (!countries?.length) {
    return []
  }

  return [...countries].sort((a, b) => b.population - a.population);
}