import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Hero from "../../components/hero/Hero.jsx";
import Brand from "../../components/brand/Brand.jsx";
import ProductItem from "../../components/productCard/Product.jsx";
import Category from "../category/Category.jsx";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductItem />
      <Category />
      <Brand />

    </div>
  );
}

export default Home;
