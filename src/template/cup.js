import style from "./cup.module.css"
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/SEO" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import CarouselHorizNav from "../components/carouselHorizNav"



export const query = graphql`
  query($slug: String!) {
    contentfulCup(id: { eq: $slug }) {
      id
      name
      imageMain {
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
      description {
        description
      }
      imagesSlide {
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
  const item = data.contentfulCup

  const imagesMainslide =  item.imagesSlide.map(image => (
    <Img fluid={image.fluid} className={style.imageMain}/>
    ))
  
  const imagesNavSlide =  item.imagesSlide.map(image => (
      <Img fluid={image.fluid} className={style.imageNav}/>
      ))
  
  return (
    <>
      <SEO 
        title={item.name} 
        description={`Подробная информация о ${item.name}`} 
        pathname={`/cups/${item.id}`}
      />
       <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            <Link to="/cups/" className={style.containerBack}>
              <FontAwesomeIcon icon={faLongArrowAltLeft} className={style.arrow}/>
              <div className={style.text}>Вернуться к списку</div>
            </Link>
            <div className={style.containerImageName}>
              <div className={style.containerCarousel}>
                <CarouselHorizNav imagesMain={imagesMainslide} imagesNav={imagesNavSlide}/>
              </div>
              <div className={style.containerName}>
                <div className={style.name}>
                  <strong>{item.name}</strong>
                </div>
              </div>
            </div>
            <div className={style.containerDescription}>
                <p><strong>Описание:</strong></p>
                <div className={style.descriptionText}>
                  {item.description.description}
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