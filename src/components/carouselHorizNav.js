/* https://react-slick.neostack.com/docs/example/as-nav-for */

import React, { useState, useEffect } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function CarouselHorizNav({ imagesMain, imagesNav, nSlides }) {
  const [state, setState] = useState(
    {
      main: null,
      nav: null
    }
  )

  let mainSlider, navSlider

  const viewSliders = () => nSlides <= 4 ? nSlides : 4

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
          slidesToShow={viewSliders()}
          swipeToSlide={true}
          focusOnSelect={true}
          lazyLoad={true}
          arrows={nSlides>4}
          centerMode={nSlides <4}
        >
          {imagesNav}
        </Slider>
      </>
      
  )
}