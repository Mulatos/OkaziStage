import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
interface SubCategory {
  subCategoryId: number;
  name: string;
}

interface DropDownSubCategoryProps {
  onSelect: (subCategoryId: number) => void;
}

const DropDownSubCategory: React.FC<DropDownSubCategoryProps> = ({
  onSelect,
}) => {
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
      console.log("fetched subcategories", response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    console.log("Selected subcategory ID:", selectedId);
    onSelect(selectedId);
  };

  return (
    <Form.Select aria-label="Default select example" onChange={handleChange}>
      <option value="">Open subcategorie menu</option>
      {subCategories.map((subCategory, index) => (
        <option key={index} value={subCategory.subCategoryId}>
          {subCategory.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default DropDownSubCategory;
