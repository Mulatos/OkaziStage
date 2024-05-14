import DropDownCategory from "../components/DropDownCategory";
import Navbar from "../components/Navbar";

function GarbagePage() {
  return (
    <div id="countainer">
      <Navbar
        home="Home"
        navItem1="Instroom"
        navItem2="uitstroom"
        navItem3="Categories"
        navItem4="Subcategories"
        rightCorner="Profile"
      ></Navbar>
      <div className="dropdownCreate">
        <input type="weight" className="input"></input>
        <DropDownCategory></DropDownCategory>
      </div>
    </div>
  );
}

export default GarbagePage;
