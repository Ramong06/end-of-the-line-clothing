import React from 'react';
import './style.css';
import { SliderData } from '../SliderData';


const ImageSlider = () => {
    return (
        <>
        { SliderData.map((slide, index) => {
            return (
              <img src={ slide.image } alt='eol-item' />
          )  
        })}
        </>
    )
}

export default ImageSlider;