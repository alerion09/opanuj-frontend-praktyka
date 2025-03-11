interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function NameInput(props: NameInputProps) {
  const { value, onChange} = props;

  return (
    <label className="flex flex-col">
      Name
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}