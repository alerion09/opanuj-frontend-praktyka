import config from '../config';
import { generateErrorMessage } from '../methods/generate-error-message.ts';
import { Country } from '../types/country.ts';
import { FetchCountriesStrategy } from '../types/fetch-countries-strategy.ts';

export const fetchCountries = async (phrase: string, strategy?: FetchCountriesStrategy): Promise<Country[]> => {

  const suffix = phrase ? `/${strategy}/${phrase}` : '/all';
  const response = await fetch(`${config.COUNTRIES_API_URL}${suffix}`);
  if (!response.ok) {
    throw new Error(generateErrorMessage(response.status));
  }

  return await response.json();
}