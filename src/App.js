import React from "react";
import './App.css';
import ImageSlider from "./Components/ImageSlider";
import Navbar from './Components/Navbar';
import { SliderData } from "./Components/SliderData";
// import Hero from "../components/Hero";
import Row from "./Components/Row";
// import Col from "./Components/Col";
import Container from "./Components/Container";

const App =() => {
  return (

      <div>
      <Navbar />
      <Container>
        <Row className='slider__row'>
          <ImageSlider slides={SliderData} />
        </Row>
      </Container>
      </div>

  );
}

export default App;
