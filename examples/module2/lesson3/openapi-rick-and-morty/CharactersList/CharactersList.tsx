import { useEffect, useState } from 'react';
import { Character, DefaultApi } from '../api/generated';

export const CharactersList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const api = new DefaultApi();
        const list = await api.getCharacters();
        setCharacters(list?.results || []);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
        }
      }
    })()
  })
  return (
    <div className="px-8 py-8 bg-gray-100 flex flex-wrap gap-4">
      {characters?.map((character: Character) => (
        <div key={character.id} className="flex flex-col gap-1">
          <h2 className="font-bold">{character.name}</h2>
          <img src={character.image} alt={character.name} className="w-200px h-200px" />
        </div>
      ))}
    </div>
  )
}