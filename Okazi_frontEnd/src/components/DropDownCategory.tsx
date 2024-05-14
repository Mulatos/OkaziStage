import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

interface Category {
  id: number;
  name: string;
}
// interface DropDownCategoryProps {
//   onSelect: (categoryId: number) => void;
// }

const DropDownCategory: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Category[]>(
        "http://localhost:8080/v1/categories/all"
      );
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching Categories:", error);
    }
  };

  return (
    <Form.Select aria-label="Default select example">
      <option>kies een Categorie</option>
      {categories.map((category, index) => (
        <option key={index} value={category.id}>
          {category.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default DropDownCategory;
