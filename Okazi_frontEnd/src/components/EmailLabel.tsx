interface Props {
  children: string;
  placeholder: string;
}

const EmailLabel = ({ children, placeholder }: Props) => {
  return (
    <div id="login">
      <label htmlFor="exampleInputEmail1" className="form-label ">
        {children}
      </label>
      <input
        type="email"
        className="form-control border border-dark"
        id="input"
        placeholder={placeholder}
        aria-describedby="emailHelp"
      ></input>
    </div>
  );
};

export default EmailLabel;
