import Navbar from "../components/Navbar";
import BigButton from "../components/BigButton";
import "../style/Main.css";

const OutflowPage = () => {
  return (
    <div id="Background">
      <Navbar
        home="Home"
        navItem1="Instroom"
        navItem2="uitstroom"
        navItem3="Categories"
        navItem4="Subcategories"
      ></Navbar>
      <h1>Uitsroom</h1>
      <div>
        <BigButton children="Winkel" />
        <BigButton children="Afval" />
      </div>
    </div>
  );
};

export default OutflowPage;
