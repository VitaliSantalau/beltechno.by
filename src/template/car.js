import style from "./car.module.css"
import React, { Component, useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/SEO" 
import CarouselHorizNav from "../components/carouselHorizNav"


export const query = graphql`
  query($slug: String!) {
    contentfulCar(id: { eq: $slug }) {
      id
      name
      image {
        fluid(toFormat: AUTO, resizingBehavior: SCALE, cropFocus: CENTER) {
          aspectRatio
          base64
          src
          sizes
          srcSet
          srcSetWebp
          srcWebp
        }
      }
      images {
        fluid(toFormat: AUTO, resizingBehavior: THUMB, cropFocus: CENTER, maxHeight: 300, maxWidth: 400) {
          aspectRatio
          base64
          src
          sizes
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
  }
`

               

const ItemCard = ({ data }) => {
  const item = data.contentfulCar
  const imagesMain =  item.images.map(image => (
    <Img fluid={image.fluid} className={style.imageMain}/>
    ))
  
  const imagesNav =  item.images.map(image => (
      <Img fluid={image.fluid} className={style.imageNav}/>
      ))
  
  return (
    <>
      <SEO 
        title={item.name} 
        description={`Подробная информация о ${item.name}`} 
        pathname={`/cars/${item.id}`}
      />
       <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            <div>
              {item.name}
              <div>
                <div>Год выпуска</div>
              </div>
            </div>
            <div className={style.containerCarousel}>
              <CarouselHorizNav imagesMain={imagesMain} imagesNav={imagesNav}/>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ItemCard;
