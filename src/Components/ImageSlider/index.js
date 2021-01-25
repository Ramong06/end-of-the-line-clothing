import React, { useState } from 'react';
import './style.css';
import { SliderData } from '../SliderData';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length

    return (
        <hero className='hero__slider'>
            <ArrowBackIosIcon className="backArrow" />
            <ArrowForwardIosIcon className="forwardArrow" />
        { SliderData.map((slide, index) => {
            return (
              <img src={ slide.image } alt='eol-item' className='hero__sliderImage' />
          )  
        })}
        </hero>
    )
}

export default ImageSlider;