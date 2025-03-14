interface SearchBarProps {
  value: string;
  onChange: (phrase: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { value, onChange } = props;

  return (
    <input className="border w-400 py-1 px-2 focus:outline-violet-600" placeholder="search country..." value={value} onChange={(e) => onChange(e.target.value)} />
  )
}