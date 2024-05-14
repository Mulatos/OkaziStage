import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import BigButton from "../components/BigButton";

function StoreTransportPage() {
  return (
    <div id="countainer">
      <Navbar
        home="Home"
        navItem1="Instroom"
        navItem2="uitstroom"
        navItem3="Categories"
        navItem4="Subcategories"
        navItem5={""}
        rightCorner={""}
      ></Navbar>
      <div className="dropdownCreate">
        <input type="weight" className="input"></input>
        <Dropdown></Dropdown>
        <BigButton children="Opslaan" />
      </div>
    </div>
  );
}

export default StoreTransportPage;
