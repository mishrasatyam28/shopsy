import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute";

// admin
import AdminHome from "./admin/home/AdminHome";
import AddProduct from "./admin/addProduct/AddProduct";
import UpdateProduct from "./admin/updateProduct/UpdateProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
