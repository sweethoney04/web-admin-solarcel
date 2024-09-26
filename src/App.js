import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Service from "./pages/Service";
import ManageProduct from "./pages/ManageProduct";
import ProductDetail from "./pages/ProductDetail";
import ManageUser from "./pages/ManageUser";
import ManageNews from "./pages/ManageNews";
import Logout from "./pages/Logout";
import AddService from "./pages/AddService";
import AddNews from "./pages/AddNews";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import FormData from "./pages/FormData";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="service" element={<Service />} />
          <Route path="manage-user" element={<ManageUser />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="logout" element={<Logout />} />
          <Route path="manage-news" element={<ManageNews />} />
          <Route path="add-service" element={<AddService />} />
          <Route path="add-news" element={<AddNews />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="form-data" element={<FormData />} />
          <Route path="add-user" element={<AddUser />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
