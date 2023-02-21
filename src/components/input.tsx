interface Input {
  type: string;
  id: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export const Input = ({ type, id, name, onChange, className }: Input) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      className={className}
      required
    />
  );
};
