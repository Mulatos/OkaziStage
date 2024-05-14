import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import BigButton from "../components/BigButton";

function GatePage() {
  return (
    <div id="countainer">
      <Navbar
        home="Home"
        navItem1="Instroom"
        navItem2="uitstroom"
        navItem3="Categories"
        navItem4="Subcategories"
      ></Navbar>
      <div className="dropdownCreate">
        <input placeholder="kg" type="weight" className="input"></input>
        <Dropdown></Dropdown>
        <BigButton children="Opslaan" />
      </div>
    </div>
  );
}

export default GatePage;
