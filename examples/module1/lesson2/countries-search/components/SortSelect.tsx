import { SortOption } from '../types/sort-option.ts';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortSelect = (props: SortSelectProps) => {
  const { value, onChange } = props;

  return (
    <div className="flex flex-col w-40 items-start">
      <label className="text-sm" htmlFor="sort-select">Sort By:</label>
      <select
        className="border py-1 px-2 focus:outline-gray-2"
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
      >
        <option value="alphabetical">Alphabetically</option>
        <option value="population">Population</option>
      </select>
    </div>
  );
};
