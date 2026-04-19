import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Landing from "./Landing";
import Homepage from "./Homepage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Moviedetails from "./Moviedetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movie/:id"
        element={
          <ProtectedRoute>
            <Moviedetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
