import style from "./car.module.css"
import React, { Component, useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/SEO" 
import Carousel from "../components/carousel"


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
    }
  }
`

/*
<div className={style.containerMainImages}>
                  {item.images.map(image => (
                    <Img fluid={image.fluid} className={style.mainImage}/>
                  ))}
                </div>
*/

const ItemCard = ({ data }) => {
  const item = data.contentfulCar

  
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
            <div className={style.containerCarousel}>
              <Carousel />
            </div>
            
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ItemCard;
