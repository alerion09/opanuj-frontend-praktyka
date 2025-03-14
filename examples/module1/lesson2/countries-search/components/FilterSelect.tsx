import { FilterOption } from '../types/filter-option.ts';

interface FilterSelectProps {
  value: FilterOption;
  onChange: (value: FilterOption) => void;
}

export const FilterSelect = (props: FilterSelectProps) => {
  const { value, onChange } = props;

  return (
    <div className="flex flex-col w-40 items-start">
      <label className="text-sm" htmlFor="filter-select">Filter By:</label>
      <select
        className="border py-1 px-2 focus:outline-gray-2"
        id="filter-select"
        value={value}
        onChange={(e) => onChange(e.target.value as FilterOption)}
      >
        <option value="name">Name</option>
        <option value="currency">Currency</option>
        <option value="language">Language</option>
        <option value="capital">Capital</option>
      </select>
    </div>
  );
};
