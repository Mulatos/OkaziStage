import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

interface Category {
  categoryId: number;
  name: string;
}
interface DropDownCategoryProps {
  onSelect: (categoryId: number) => void;
}

const DropDownCategory: React.FC<DropDownCategoryProps> = ({ onSelect }) => {
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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = parseInt(event.target.value);
    console.log("selected category ID", selectedCategoryId);
    onSelect(selectedCategoryId);
  };

  return (
    <Form.Select aria-label="Default select example" onChange={handleChange}>
      <option value="">kies een Categorie</option>
      {categories.map((category) => (
        <option key={category.categoryId} value={category.categoryId}>
          {category.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default DropDownCategory;
