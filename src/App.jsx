import LocomotiveScroll from "locomotive-scroll";

import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Strips from "./components/Strips";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-zinc-900 h-full w-full text-white  font-satoshiBold ">
      <Navbar></Navbar>
      <Work></Work>
      <Strips></Strips>
      <Products></Products>
      <Marquees></Marquees>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};

export default App;
