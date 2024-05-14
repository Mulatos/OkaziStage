import { useState } from "react";
import "../style/Login.css";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

// interface Users {
//   userId: number;
//   name: string;
//   password: string;
//   email: string;
// }

function RegistrationPage() {
  const [registartionUsername, setRegistratieUsername] = useState("");
  const [registratiePassword, setRegistratiePassword] = useState("");
  const [registratieEmailAdress, setRegistratieEmailAdress] = useState("");

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/v1/users/create", {
        username: registartionUsername,
        password: registratiePassword,
        email: registratieEmailAdress,
        role: "gebruiker",
      });

      setRegistratieUsername("");
      setRegistratiePassword("");
      setRegistratieEmailAdress("");

      console.log("New user created Woop Woop! :D");
    } catch (error) {
      console.error("Error creating user", error);
    }
  };

  return (
    <div id="LoginBackground" className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-light border-radius: 1rem;">
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5">
                <div>
                  <Form onSubmit={handleFormSubmit}>
                    <h2 className="fw-bold mb-2 text-uppercase">Registratie</h2>
                    <p>
                      fixed the sumbission LEGEND (REMOVE THIS when its done)
                    </p>
                    <Form.Group>
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        id="input"
                        type="text"
                        placeholder="username"
                        value={registartionUsername}
                        onChange={(e) => setRegistratieUsername(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Wachtwoord</Form.Label>
                      <Form.Control
                        id="input"
                        type="password"
                        placeholder="wachtwoord"
                        value={registratiePassword}
                        onChange={(e) => setRegistratiePassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        id="input"
                        type="email"
                        placeholder="emailadress"
                        value={registratieEmailAdress}
                        onChange={(e) =>
                          setRegistratieEmailAdress(e.target.value)
                        }
                      ></Form.Control>
                    </Form.Group>
                    <br></br>
                    <Button size="lg" type="submit">
                      Creëer nieuw account
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;

// if you ever have time change this to ReactBootstrap instead of jsuat Bootstrap KIND REGARD INTER mister #Mulatos (=github)
// i changed the form to ReachtBootstrap but not the rest sorry, not sorry 13/5/2024
