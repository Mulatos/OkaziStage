import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

interface OkaziUsers {
  userId: number;
  userName: string;
  password: string;
  email: string;
  role: string;
}
function UserControllerPage() {
  const [okaziUsers, setOkaziUsers] = useState<OkaziUsers[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<OkaziUsers[]>(
        `http://localhost:8080/v1/users/all`
      );
      setOkaziUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("error fetching Users:", error);
    }
  };

  const handleDeleteUser = async (id: number) => {
    console.log("user ID to delete", id);

    try {
      await axios.delete(`http://localhost:8080/v1/users/${id}`);

      console.log("User deleted successfully!");
    } catch (error) {
      console.log("Error delete user:", error);
    }
  };

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
      <h1>Users</h1>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Role</th>
            <th>action button</th>
          </tr>
        </thead>
        <tbody>
          {okaziUsers.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(user.userId)}
                >
                  verwijder
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserControllerPage;
