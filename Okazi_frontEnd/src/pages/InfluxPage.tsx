import BigButton from "../components/BigButton";
import Navbar from "../components/Navbar";

function InfluxPage() {
  return (
    <div id="Background">
      <Navbar
        home="Home"
        navItem1="Instroom"
        navItem2="uitstroom"
        navItem3="Categories"
        navItem4="Subcategories"
      ></Navbar>
      <h1>Instroom</h1>
      <div>
        <BigButton children="Vrachtwagen" />
        <BigButton children="Poort" />
      </div>
    </div>
  );
}

export default InfluxPage;
