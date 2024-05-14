interface Props {
  children: string;
  color?: string; // the "?" means its optional and can predifine the values if you use "|"
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
