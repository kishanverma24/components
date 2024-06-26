import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import SubCategory from "./pages/subcategory/SubCategory";
import Brands from "./pages/brands/Brands";
import Product from "./pages/product/Product";
import Brand from "./components/brand/Brand";
import "./app.css";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:subcategoryName" element={<SubCategory/>}/>
          <Route path="/category/:subcategoryName/brands" element={<Brands/>}/>
        <Route path="/category/:subcategoryName/brands/product" element={<Product/>}/>
        </Routes>     
      </Router>
    </>
  );
};

export default App;
