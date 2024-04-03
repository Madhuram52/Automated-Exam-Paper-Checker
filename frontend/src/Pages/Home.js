import React, { useState, useEffect } from "react";
import './Home.css';
import Banner from "../Components/HomeCompnents/Banner";
import About from "../Components/HomeCompnents/About";
import Contact_us from "../Components/HomeCompnents/Contact_us";

function Home() {
  console.log("banner");
  return (
    <React.Fragment>
      <Banner />
      <About />
      <Contact_us />
    </React.Fragment>
  );
}

export default Home;