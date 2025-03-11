import { NameInput } from './NameInput.tsx';
import { GenderSelect } from './GenderSelect.tsx';
import { SortOptionSelect } from './SortOptionSelect.tsx';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <NameInput value={name} onChange={setName} />
      <GenderSelect value={gender} onChange={setGender} />
      <SortOptionSelect value={sortOption} onChange={setSortOption} />
    </form>
  );
}

export default SearchForm;
