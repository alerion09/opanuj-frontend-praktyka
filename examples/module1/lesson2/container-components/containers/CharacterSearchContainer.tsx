import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useSearchCharacters } from '../hooks/use-search-characters.ts';
import { useSortCharacters } from '../hooks/use-sort-characters.ts';

function CharacterSearchContainer() {
  const { characters, gender, name, setName, setGender } =
    useSearchCharacters();
  const { sortedCharacters, sortOption, setSortOption } =
    useSortCharacters(characters);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka postaci Pokemon" />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
