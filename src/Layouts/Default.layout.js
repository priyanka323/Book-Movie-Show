import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component.js";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component.js"

const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      {props.children}
    </div>
  );
};

export default DefaultLayout;