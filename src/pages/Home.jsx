import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Equipments from "../components/Equipments";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Categories/>
      <Equipments/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
