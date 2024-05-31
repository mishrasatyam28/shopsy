import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminHome from "./admin/home/AdminHome";
import AddProduct from "./admin/addProduct/AddProduct";
import UpdateProduct from "./admin/updateProduct/UpdateProduct";
import MyState from "./context/data/myState.jsx";

function App() {
  return (
    <div className="App">
      <MyState>
        <Router>
          <Routes>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
          </Routes>
        </Router>
      </MyState>
    </div>
  );
}

export default App;
