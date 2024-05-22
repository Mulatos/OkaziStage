import "bootstrap/dist/js/bootstrap.bundle.js";

import { Route, Routes } from "react-router-dom";

import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import MeasurementPage from "./pages/MeasurementPage";
import LocationPage from "./pages/LocationPage";
import UserControllerPage from "./pages/UserControllerPage";
import OverviewPage from "./pages/OverviewPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MeasurementPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/subcategories" element={<SubCategoryPage />} />
        <Route path="/measurements" element={<MeasurementPage />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/users" element={<UserControllerPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/registratie" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

// remember to change to different disk you do "cd /d D:"
