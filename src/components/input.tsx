interface Input {
  type: string;
  id: string;
  name: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  className?: string;
}

export const Input = ({ type, id, name, value, onChange, onBlur, className }: Input) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={className}
      required
    />
  );
};
