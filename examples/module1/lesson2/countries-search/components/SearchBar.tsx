interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (phrase: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { placeholder, value, onChange } = props;

  return (
    <div className="flex flex-col items-start">
      <label className="text-sm" htmlFor="search-bar">
        Search country
      </label>
      <input
        id="search-bar"
        className="border w-400 py-1 px-2 focus:outline-violet-600 block"
        placeholder={placeholder || 'Search country...'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
