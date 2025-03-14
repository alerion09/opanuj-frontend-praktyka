import { useEffect, useState } from 'react';
import config from '../config';
import type { Country } from '../types/country.ts';

export const useCountriesSearch = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [phrase, setPhrase] = useState<string>('');
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setError('');
    fetch(`${config.COUNTRIES_API_URL}/name/${phrase}`)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((e) => e.status !== 404 && setError('Failed to fetch'));
  }, [phrase]);

  return {
    countries,
    error,
    phrase,
    setPhrase,
  }
}