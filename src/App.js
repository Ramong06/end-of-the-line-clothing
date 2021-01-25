import React from "react";
import './App.css';
import ImageSlider from "./Components/ImageSlider";
import Navbar from './Components/Navbar';
import { SliderData } from "./Components/SliderData";

const App =() => {
  return (

      <div>
      <Navbar />
      <ImageSlider slides={SliderData} />
      </div>

  );
}

export default App;
