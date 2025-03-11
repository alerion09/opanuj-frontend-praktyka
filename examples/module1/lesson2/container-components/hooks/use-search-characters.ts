import { useEffect, useState } from 'react';
import type { Character } from '../types/Character.ts';

export const useSearchCharacters = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (name || gender) {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
      )
        .then((response) => response.json())
        .then((data) => setCharacters(data.results || []))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [name, gender]);

  return {
    characters,
    gender,
    name,
    setGender,
    setName,
  }
}