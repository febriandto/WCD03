import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";

function App() {
  return (
    <div className="font-neue">
      <div className="min-h-screen text-white p-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<Add />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/card/:id"
            element={
              <ProtectedRoute>
                <Detail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
