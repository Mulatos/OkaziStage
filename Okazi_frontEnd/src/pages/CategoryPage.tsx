import { Button, Col, Form, Table } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../style/Style.css";

interface Categories {
  categoryId: number;
  name: string;
}

function CategoryPage() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [categoryName, setCategoryName] = useState("");

  const [currentView, setCurrentView] = useState("List");

  useEffect(() => {
    fetchData();
  }, []);

  const renderPageView = () => {
    switch (currentView) {
      case "List":
        return (
          <div>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>categorie naam</th>
                  <th>action buttons</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>

                    <td>
                      <Button
                        variant="danger"
                        onClick={() =>
                          handleDeleteCategory(category.categoryId)
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
              Maak een nieuwe categorie
            </Button>
          </div>
        );
      case "Create":
        return (
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Col xs="8">
                <Form.Label>Naamgeving van de categorie</Form.Label>
                <Form.Control
                  type="Category"
                  placeholder="Categorienaam"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
              Nieuwe Categorie aanmaken
            </Button>
            <Link to={"/"}>
              <Button variant="primary">Terug</Button>
            </Link>
            <Button onClick={() => setCurrentView("List")}>Zie lijst ^^</Button>
          </Form>
        );
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get<Categories[]>(
        "http://localhost:8080/v1/categories/all"
      );
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/v1/categories/create", {
        name: categoryName,
      });

      setCategoryName("");

      console.log("New Category created!");
      fetchData();
    } catch (error) {
      console.error("error creating category:", error);
    }
  };

  const handleDeleteCategory = async (id: number) => {
    console.log("category ID to delete", id);

    try {
      await axios.delete(`http://localhost:8080/v1/categories/${id}`);
      console.log("Category deleted succesfully");
    } catch (error) {
      console.log("Error Delete category:", error);
    }
  };

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
      <h1>Category</h1>
      <div id="container">
        <p>Modal voor het aanmaken van een nieuwe categorie</p>
        {renderPageView()}
      </div>
    </div>
  );
}

export default CategoryPage;
