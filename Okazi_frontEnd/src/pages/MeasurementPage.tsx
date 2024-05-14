import Navbar from "../components/Navbar";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownCategory from "../components/DropDownCategory";

export default function MeasurementPage() {
  return (
    <div id="countainer">
      <Navbar
        home="Home"
        navItem1="Meetings"
        navItem2="Categories"
        navItem3="SubCategories"
        navItem4="Locaties"
        navItem5="Overzicht"
        rightCorner="Profiel"
      ></Navbar>
      <h1>Meusurements</h1>
      <div className="dropdownCreate">
        <input type="weight" className="input"></input>
        <Button variant="primary" size="lg">
          Opslaan
        </Button>
        <Link to={"/"}>
          <Button variant="primary" size="lg">
            Terug
          </Button>
        </Link>
        <DropDownCategory></DropDownCategory>
      </div>
    </div>
  );
}
