import React, { useState } from 'react';
import './style.css';
import { SliderData } from '../SliderData';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <hero className='hero__slider'>
            <ArrowBackIosIcon className="backArrow" onClick={prevSlide}/>
            <ArrowForwardIosIcon className="forwardArrow" onClick={nextSlide} />
            { SliderData.map((slide, index) => {
                return (
                    <img src={slide.image} alt='eol-item' className='hero__sliderImage' />
                )
            })}
        </hero>
    )
};

export default ImageSlider;