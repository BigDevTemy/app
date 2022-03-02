import '../../../assets/css/newHero/hero.css'
import React, { useState } from 'react';

import Slider1 from '../../../assets/images/landingpage/bg/slider-1.jpg'
import Slider2 from '../../../assets/images/landingpage/bg/slider-2.jpg'
import Slider3 from '../../../assets/images/landingpage/bg/slider-3.jpg'
import { Dot } from 'react-bootstrap-icons';
import { useEffect } from 'react';
import SliderText from './sliderText'
import SliderTextII from './sliderTextII'

const Index = ()=>{
   
    const [animateImg, setanimateImg] = useState(0)
    
    useEffect(()=>{
        const intervalId = setInterval(changeHero,10000)
        return () => clearInterval(intervalId);
    },[animateImg])

    const changeHero = ()=>{
        
    }


    return (
        <div className='hero'>
           <div className='content'>
               <SliderTextII/>
               
           </div>
        </div>
    )
}

export default Index