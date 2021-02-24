/* https://react-slick.neostack.com/docs/example/as-nav-for */

import style from "./carouselHorizNav.module.css"
import React, { useState, useEffect } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function CarouselHorizNav({ imagesMain, imagesNav }) {
  const [state, setState] = useState(
    {
      main: null,
      nav: null
    }
  )

  let mainSlider, navSlider

  useEffect(()=> {
    setState(
      {
        main: mainSlider,
        nav: navSlider
      }
    )
  }, [])
  
 
  return (
      <>
        <Slider
          asNavFor={state.nav}
          ref={slider => (mainSlider = slider)}
          arrows={false}
          lazyLoad={true}
        >
          {imagesMain}
        </Slider>
   
     <Slider
          asNavFor={state.main}
          ref={slider => (navSlider = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          lazyLoad={true}
          arrows={false}
        >
          {imagesNav}
        </Slider>
  
        
        
        
        </>
      
  )
}