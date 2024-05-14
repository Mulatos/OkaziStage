import ButtonLogin from "../components/ButtonLogin";
import EmailLabel from "../components/EmailLabel";

import PasswordLabel from "../components/PasswordLabel";
import "../style/Login.css";

function LoginPage() {
  return (
    <div id="LoginBackground">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-light border-radius: 1rem;">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5"></div>
                <EmailLabel placeholder="email">emailadress</EmailLabel>
                <PasswordLabel placeholder="password">
                  Koekjeswachtwoord
                </PasswordLabel>
                <ButtonLogin
                  children="Registratie"
                  child2="login"
                ></ButtonLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
