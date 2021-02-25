import style from "./car.module.css"
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/SEO" 



export const query = graphql`
  query($slug: String!) {
    contentfulPaper(id: { eq: $slug }) {
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
      density
      purpose {
        raw
      }
    }
  }
`

               

const ItemCard = ({ data }) => {
  const item = data.contentfulPaper
  
  return (
    <>
      <SEO 
        title={item.name} 
        description={`Подробная информация о ${item.name}`} 
        pathname={`/rolls/${item.id}`}
      />
       <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            <div>
              {item.name}
              <div>
              <Img fluid={item.image.fluid} className={style.imageNav}/>
              </div>
              {item.density}
              {item.purpose}
            </div>
            
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ItemCard;
