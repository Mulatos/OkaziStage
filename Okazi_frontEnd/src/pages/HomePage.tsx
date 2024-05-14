import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import { useState } from "react";

function HomePage() {
  const [currentView, setCurrentView] = useState("initial");

  const renderButtons = () => {
    switch (currentView) {
      case "initial":
        return (
          <div>
            <Button
              onClick={() => setCurrentView("in")}
              variant="primary"
              size="lg"
            >
              IN
            </Button>
            <Button
              onClick={() => setCurrentView("out")}
              variant="primary"
              size="lg"
            >
              OUT
            </Button>
          </div>
        );
      case "in":
        return (
          <div>
            <Link to={"/"}>
              <Button>Vrachtwagen</Button>
            </Link>
            <Link to={"/"}>
              <Button>Poort</Button>
            </Link>
            <Button onClick={() => setCurrentView("initial")}>Terug</Button>
          </div>
        );
      case "out":
        return (
          <div>
            <Link to={"/"}>
              <Button>Winkel</Button>
            </Link>
            <Link to={"/"}>
              <Button>Afval</Button>
            </Link>
            <Button onClick={() => setCurrentView("initial")}>Terug</Button>
          </div>
        );
    }
  };
  return (
    <div id="Background">
      <Navbar
        home="Home"
        navItem1="Meetings"
        navItem2="Categories"
        navItem3="SubCategories"
        navItem4="Locaties"
        navItem5="Overzicht"
        rightCorner="Profiel"
      ></Navbar>
      <h1>Home</h1>
      <div>{renderButtons()}</div>
    </div>
  );
}
export default HomePage;
