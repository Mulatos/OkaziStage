import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LorryPage() {
  return (
    <div id="countainer">
      <Navbar
        home="Home"
        navItem1="Meetings"
        navItem2="Categories"
        navItem3="SubCategories"
        navItem4="Locaties"
        rightCorner="Profiel"
      ></Navbar>
      <div className="dropdownCreate">
        <input type="weight" className="input"></input>
        <Dropdown></Dropdown>
        <Button variant="primary" size="lg">
          IN
        </Button>
      </div>
      <Link to={"/"}>
        <Button variant="primary" size="lg">
          Terug
        </Button>
      </Link>
    </div>
  );
}

export default LorryPage;
