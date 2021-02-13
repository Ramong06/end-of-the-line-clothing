import React from "react";
import './App.css';
// import ImageSlider from "./Components/ImageSlider";
import Navbar from './Components/Navbar';
// import { SliderData } from "./Components/SliderData";
// import Hero from "../components/Hero";
import Background from './images/tailor-pic.jpg'
import Bebe from './images/beeb.jpeg';
import Row from "./Components/Row";
import Col from "./Components/Col";
import Container from "./Components/Container";

const App =() => {
  return (

    <div style={{
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
    }}>
      <Navbar />
      {/* <ImageSlider slides={SliderData} /> */}
      <Container>
        <Row className='slider__row'>
          <Col size="md-12 sm-6 justify-content-md-center" id="bebe__column">
            <img className = 'bebe__image' src = {Bebe} alt = 'woman-taking-selfie' height = '400px' width = '400px' />
          </Col>
        </Row>
      </Container>
      </div>

  );
}

export default App;
