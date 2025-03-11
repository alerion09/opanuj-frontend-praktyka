interface SortOptionSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function SortOptionSelect(props: SortOptionSelectProps) {
  const { value, onChange} = props;

  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="">Initial</option>
        <option value="name">Name</option>
        <option value="created">Created Date</option>
      </select>
    </label>
  )
}