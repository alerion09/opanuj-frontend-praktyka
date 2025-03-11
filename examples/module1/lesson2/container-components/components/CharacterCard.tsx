import type { Character } from '../types/Character.ts';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard(props: CharacterCardProps) {
  const { character } = props;

  return (
    <li key={character.id} className="flex flex-col items-center">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </li>
  )
}