import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Form, Table } from "react-bootstrap";

interface WeightData {
  category: string | null;
  transactionType: boolean | null;
  instroom: boolean | null;
  date: string;
  totalWeight: number;
}

function OverviewPage() {
  const [data, setData] = useState<WeightData[]>([]);
  const [filteredData, setFilteredData] = useState<WeightData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedData] = useState<Date | null>(null);

  const userLocale = navigator.language;

  useEffect(() => {
    axios
      .get<any[]>("http://localhost:8080/v1/measurements/overview")
      .then((response) => {
        const processedData = response.data.map((item) => ({
          category: item[0],
          transactionType: item[1],
          instroom: item[2],
          date: item[3],
          totalWeight: item[4],
        }));
        setData(processedData);
        console.log(processedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedData(date);
    if (date) {
      const filtered = data.filter(
        (item) => new Date(item.date).toDateString() === date.toDateString()
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const formatDate = (dateString: string, userLocale: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(userLocale, {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
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
      <h1>Overzicht</h1>

      <Form>
        <Form.Group controlId="datePicker">
          <Form.Label>Select Date</Form.Label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            isClearable
            className="form-control"
            placeholderText="selecteer een datum"
            calendarStartDay={1}
          />
        </Form.Group>
      </Form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <Table bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Transaction Type</th>
              <th>Instroom</th>
              <th>Total Weight</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {(selectedDate ? filteredData : data).map((row, index) => (
              <tr key={index}>
                <td>{row.category || "N/A"}</td>
                <td>
                  {row.transactionType !== null
                    ? row.transactionType
                      ? "In"
                      : "Out"
                    : "N/A"}
                </td>
                <td>
                  {row.instroom !== null
                    ? row.instroom
                      ? "Yes"
                      : "No"
                    : "N/A"}
                </td>
                <td>{row.totalWeight}</td>
                <td>{formatDate(row.date, userLocale)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default OverviewPage;
