interface Props {
  children: string;
  child2: string;
}
function ButtonLogin({ children, child2 }: Props) {
  return (
    <ul
      className="nav nav-pills nav-justified mb-3 mt-2"
      id="ex1"
      role="tablist"
    >
      <li className="nav-item">
        <a
          className="nav-link active"
          id="tab-login"
          data-mdb-pill-init
          href="#pills-login"
          role="tab"
          aria-controls="pills-login"
          aria-selected="true"
        >
          {children}
        </a>
      </li>
      <li className="nav-item ml-2 ">
        <a
          className="nav-link"
          id="tab-register"
          data-mdb-pill-init
          href="#pills-register"
          role="tab"
          aria-controls="pills-register"
          aria-selected="false"
        >
          {child2}
        </a>
      </li>
    </ul>
  );
}

export default ButtonLogin;
