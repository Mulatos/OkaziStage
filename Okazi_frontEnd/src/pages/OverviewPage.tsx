import Navbar from "../components/Navbar";

export default function OverviewPage() {
  return (
    <div>
      <Navbar
        home="Home"
        navItem1="Meetings"
        navItem2="Categories"
        navItem3="SubCategories"
        navItem4="Locaties"
        navItem5="Overzicht"
        rightCorner="Profiel"
      ></Navbar>
      <h1>Overzicht</h1>
      <h2>Put a table here with weight per category</h2>
    </div>
  );
}
