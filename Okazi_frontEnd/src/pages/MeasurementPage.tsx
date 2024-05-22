import Navbar from "../components/Navbar";

import { Button, Form } from "react-bootstrap";
import DropDownSubCategory from "../components/DropDownSubCategory";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// interface Measurements {
//   subCategoryId: number;
// }

export default function MeasurementPage() {
  const [currentView, setCurrentView] = useState("initial");

  const [measurementWeight, setMeasurementWeight] = useState("");

  const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(
    null
  );

  const handleSubCategoryChange = (id: number) => {
    console.log("subcategory selected:", id);
    setSelectedSubCategory(id);
  };

  // Yes i know the 4handle functions for submitting are very bad coding, but it works with the api i made atm. Feel free to cahnge things :)

  const handleFormSubmitLorry = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form with data:", {
      weight: measurementWeight,
      subCategorieId: selectedSubCategory,
    });
    if (measurementWeight === "") {
      console.error("weight cant be 0");
      return;
    }

    try {
      await axios.post("http://localhost:8080/v1/measurements/create", {
        weight: measurementWeight,
        transaction: true,
        instroom: true,
        locationId: 2,
        subCategorieId: selectedSubCategory,
        userId: 2,
      });

      setMeasurementWeight("");
      console.log("New measurement created for handleFormSubmitLorry");
    } catch (error) {
      console.error("error creating measurement", error);
    }
  };

  const handleFormSubmitGate = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("submitting this data", {
      weight: measurementWeight,
      subCategorieId: selectedSubCategory,
    });

    if (measurementWeight === "") {
      console.error("Weight cant be empty");
      return;
    }

    try {
      await axios.post("http://localhost:8080/v1/measurements/create", {
        weight: measurementWeight,
        transaction: true,
        instroom: false,
        locationId: 2,
        subCategorieId: selectedSubCategory,
        userId: 2,
      });

      setMeasurementWeight("");
      console.log("New measurement created for handleFormSubmitGate");
    } catch (error) {
      console.error("error creating measurement", error);
    }
  };

  const handelFormSubmitStore = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("submitting this data", {
      weight: measurementWeight,
      subCategorieId: selectedSubCategory,
    });

    if (measurementWeight === "") {
      console.error("Weight cant be empty");
      return;
    }

    try {
      await axios.post("http://localhost:8080/v1/measurements/create", {
        weight: measurementWeight,
        transaction: false,
        instroom: true,
        locationId: 2,
        subCategorieId: selectedSubCategory,
        userId: 2,
      });

      setMeasurementWeight("");
      console.log("New measurement created for handelFormSubmitStore");
    } catch (error) {
      console.error("error creating measurement", error);
    }
  };

  const handelFormSubmitGarbage = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("submitting this data", {
      weight: measurementWeight,
      subCategorieId: selectedSubCategory,
    });

    if (measurementWeight === "") {
      console.error("Weight cant be empty");
      return;
    }

    try {
      await axios.post("http://localhost:8080/v1/measurements/create", {
        weight: measurementWeight,
        transaction: false,
        instroom: false,
        locationId: 2,
        subCategorieId: selectedSubCategory,
        userId: 2,
      });

      setMeasurementWeight("");
      console.log("New measurement created for handelFormSubmitGarbage");
    } catch (error) {
      console.error("error creating measurement", error);
    }
  };

  const renderPageViewMeasurements = () => {
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
            <Button onClick={() => setCurrentView("Create Lorry")}>
              Vrachtwagen
            </Button>
            <Button onClick={() => setCurrentView("Create Gate")}>Poort</Button>
            <Button onClick={() => setCurrentView("initial")}>Terug</Button>
          </div>
        );
      case "out":
        return (
          <div>
            <Button onClick={() => setCurrentView("Create Store")}>
              Winkel
            </Button>
            <Button onClick={() => setCurrentView("Create Garbage")}>
              Afval
            </Button>
            <Button onClick={() => setCurrentView("initial")}>Terug</Button>
          </div>
        );
      case "Create Lorry":
        return (
          <div>
            <p>Lorry</p>
            <Form onSubmit={handleFormSubmitLorry}>
              <Form.Group>
                <Form.Label>Meeting</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="gewicht hier"
                  value={measurementWeight}
                  onChange={(e) => setMeasurementWeight(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Kies een subcategorie </Form.Label>
                <DropDownSubCategory onSelect={handleSubCategoryChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Niew gewicht aanamken
              </Button>
            </Form>
            <Button variant="primary" onClick={() => setCurrentView("List")}>
              Een lijst ja?
            </Button>
            <Button onClick={() => setCurrentView("initial")}>Terug</Button>
          </div>
        );
      case "Create Gate":
        return (
          <div>
            <p>gate</p>
            <Form onSubmit={handleFormSubmitGate}>
              <Form.Group>
                <Form.Label>Meeting</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="gewicht hier"
                  value={measurementWeight}
                  onChange={(e) => setMeasurementWeight(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Kies een subcategorie </Form.Label>
                <DropDownSubCategory onSelect={handleSubCategoryChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Niew gewicht aanamken
              </Button>
            </Form>
            <Link to={"/overview"}>
              <Button variant="primary">Een lijst ja?</Button>
            </Link>
            <Button onClick={() => setCurrentView("initial")}>Terug</Button>
          </div>
        );
      case "Create Store":
        return (
          <div>
            <p>Store</p>
            <Form onSubmit={handelFormSubmitStore}>
              <Form.Group>
                <Form.Label>Meeting</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="gewicht hier"
                  value={measurementWeight}
                  onChange={(e) => setMeasurementWeight(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Kies een subcategorie </Form.Label>
                <DropDownSubCategory onSelect={handleSubCategoryChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Niew gewicht aanamken
              </Button>
            </Form>
            <Link to={"/overview"}>
              <Button variant="primary">Een lijst ja?</Button>
            </Link>
            <Button onClick={() => setCurrentView("initial")}>Terug</Button>
          </div>
        );
      case "Create Garbage":
        return (
          <div>
            <p>Garbage</p>
            <Form onSubmit={handelFormSubmitGarbage}>
              <Form.Group>
                <Form.Label>Meeting</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="gewicht hier"
                  value={measurementWeight}
                  onChange={(e) => setMeasurementWeight(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Kies een subcategorie </Form.Label>
                <DropDownSubCategory onSelect={handleSubCategoryChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Niew gewicht aanamken
              </Button>
            </Form>
            <Link to={"/overview"}>
              <Button variant="primary">Een lijst ja?</Button>
            </Link>

            <Button onClick={() => setCurrentView("initial")}>Terug</Button>
          </div>
        );
      case "List":
        return (
          <div>
            <h2>hehe lijst xD</h2>
            <Button
              variant="primary"
              onClick={() => setCurrentView("Create Lorry")}
            >
              Meting maken, jaja
            </Button>
            <Button onClick={() => setCurrentView("initial")}>Terug</Button>
          </div>
        );
    }
  };
  return (
    <div id="countainer">
      <Navbar
        home="Home"
        navItem2="Categories"
        navItem3="SubCategories"
        navItem4="Locaties"
        navItem5="Overzicht"
        rightCorner="Profiel"
      ></Navbar>
      <h1>Meusurements</h1>
      {renderPageViewMeasurements()}
      <h2>vind een manier dat je gewoon de keuze kunt meegeven </h2>
    </div>
  );
}
