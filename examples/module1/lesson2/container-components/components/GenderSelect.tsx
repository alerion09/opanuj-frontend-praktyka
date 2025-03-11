interface GenderSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function GenderSelect(props: GenderSelectProps) {
  const { value, onChange} = props;

  return (
    <label className="flex flex-col">
      Gender
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="">Any Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </label>
  )
}