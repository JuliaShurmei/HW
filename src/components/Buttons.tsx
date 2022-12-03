interface Butt {
  value: string;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({ value, className, onClick }: Butt) => {
  return (
    <button type='submit' className={className} onClick={onClick}>
      {" "}
      {value}{" "}
    </button>
  );
};
