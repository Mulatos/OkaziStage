import { Button, Form, Table } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface locations {
  locationId: number;
  name: string;
  address: string;
  city: string;
  postcode: number;
}

function LocationPage() {
  const [locations, setLocations] = useState<locations[]>([]);

  const [locationName, setLocationName] = useState("");
  const [locationAdress, setLocationAdress] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [locationPostCode, setLocationPostCode] = useState("");

  const [currentView, setCurrentView] = useState("Create");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<locations[]>(
        `http://localhost:8080/v1/locations/all`
      );
      setLocations(response.data);
      console.log(response.data);
    } catch (error) {}
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/v1/locations/create", {
        name: locationName,
        address: locationAdress,
        city: locationCity,
        postcode: locationPostCode,
      });

      setLocationName("");
      setLocationAdress("");
      setLocationCity("");
      setLocationPostCode("");

      console.log("New Location Created!");
    } catch (error) {
      console.error("error creating Location:", error);
    }
  };

  const handleDeleteLocation = async (id: number) => {
    console.log("Locations ID to delete", id);

    try {
      await axios.delete(`http://localhost:8080/v1/locations/${id}`);
      console.log("Location deleted very good! xD");
    } catch (error) {
      console.log("Error deleting this LOCATIOOOOOOON!!", error);
    }
  };

  const renderPageViewLocation = () => {
    switch (currentView) {
      case "List":
        return (
          <div>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Winkel</th>
                  <th>Adress</th>
                  <th>Stad</th>
                  <th>Postcode</th>
                  <th>Action buttons</th>
                </tr>
              </thead>
              <tbody>
                {locations.map((location, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{location.name}</td>
                    <td>{location.address}</td>
                    <td>{location.city}</td>
                    <td>{location.postcode}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() =>
                          handleDeleteLocation(location.locationId)
                        }
                      >
                        verwijder
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button onClick={() => setCurrentView("Create")}>
              Maak een nieuwe locatie
            </Button>
          </div>
        );
      case "Create":
        return (
          <div>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Naam van de winkel</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Naam van de winkel"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>adres</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="adres + nummer"
                  value={locationAdress}
                  onChange={(e) => setLocationAdress(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Stad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Naam van de stad"
                  value={locationCity}
                  onChange={(e) => setLocationCity(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Postcode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Postcode"
                  value={locationPostCode}
                  onChange={(e) => setLocationPostCode(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Nieuwe locatie aanmaken
              </Button>
            </Form>

            <Button onClick={() => navigate(-1)} variant="primary">
              Terug
            </Button>
            <Button onClick={() => setCurrentView("List")}>
              zie Lijst ^^{" "}
            </Button>
          </div>
        );
    }
  };

  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        home="Home"
        navItem2="Categories"
        navItem3="SubCategories"
        navItem4="Locaties"
        navItem5="Overzicht"
        rightCorner="Profiel"
      ></Navbar>
      <h1>Location</h1>
      {renderPageViewLocation()}
    </div>
  );
}

export default LocationPage;
