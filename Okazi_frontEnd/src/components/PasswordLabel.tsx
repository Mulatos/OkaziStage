interface Props {
  children: string;
  placeholder: string;
}

const PasswordLabel = ({ children, placeholder }: Props) => {
  return (
    <div id="login">
      <label htmlFor="exampleInputPassword1" className="loginText">
        {children}
      </label>
      <input
        type="password"
        className="form-control border-dark"
        id="input"
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default PasswordLabel;
