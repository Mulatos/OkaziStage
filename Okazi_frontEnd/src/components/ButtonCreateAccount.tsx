interface Props {
  children: string;
}

function ButtonCreateAccount({ children }: Props) {
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
    </ul>
  );
}

export default ButtonCreateAccount;
