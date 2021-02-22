import style from "./car.module.css"
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/SEO"
import auto from "../images/auto.jpeg"



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

const ItemCard = ({ data }) => {
  const item = data.contentfulCar
  /* 
  {item.images.map(image => (
                <Img fluid={image.fluid} className={style.mainImage}/>
              ))}  
              */
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
            <div className={style.slider}>
              <div className={style.mainFrame}>
                <div className={style.containerMainImages}>
                  {item.images.map(image => (
                    <Img fluid={image.fluid} className={style.mainImage}/>
                  ))}
                </div>
              </div>
              <div className={style.navSlider}>

              </div>
              <div className={style.containerSmallImages}>
                {item.images.map(image => (
                  <Img fluid={image.fluid} className={style.smallImage}/>
                ))}
              </div>
            </div>        
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default ItemCard;