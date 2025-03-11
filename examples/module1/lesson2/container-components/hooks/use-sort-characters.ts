import { useState } from 'react';
import type { Character } from '../types/Character.ts';

export const useSortCharacters = (characters: Character[]) => {
  const [sortOption, setSortOption] = useState('');

  const sortCharacters = () => {
    return [...characters].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'created') {
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      }
      return 0;
    });
  };

  const sortedCharacters = sortCharacters();

  return {
    sortedCharacters,
    sortOption,
    setSortOption
  }
};
