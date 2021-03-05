import React, { useState } from 'react'
import { HeroData } from './HeroData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Hero.scss';

function Hero({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
    }
    // console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='Hero'>
            <FaArrowAltCircleLeft className='Hero__left' onClick={prevSlide} />
            <FaArrowAltCircleRight className='Hero__right' onClick={nextSlide}  />
            {HeroData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index} >
                        {index === current && (
                            <img className="Hero__img" src={slide.image} alt='travel image' key={index} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Hero
