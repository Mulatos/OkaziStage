import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
interface SubCategory {
  id: number;
  name: string;
}

const DropDownSubCategory: React.FC = () => {
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<SubCategory[]>(
        "http://localhost:8080/v1/subcategories/all"
      );
      setSubCategories(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      {subCategories.map((subCategory, index) => (
        <option key={index} value={subCategory.id}>
          {subCategory.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default DropDownSubCategory;
