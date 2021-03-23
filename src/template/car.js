import style from "./car.module.css"
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/SEO" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import CarouselHorizNav from "../components/carouselHorizNav"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'



export const query = graphql`
  query($slug: String!) {
    contentfulCar(id: { eq: $slug }) {
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
        raw
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
  const item = data.contentfulCar

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
            <Link to="/cars/" className={style.containerBack}>
              <FontAwesomeIcon icon={faLongArrowAltLeft} className={style.arrow}/>
              <div className={style.text}>Вернуться к списку</div>
            </Link>
            <div className={style.containerImageName}>
              {item.imagesSlide.length === 1 &&
                <div className={style.containerImage}>
                  <Img fluid={item.imageMain.fluid} className={style.image}/>
                </div>
              }
              {item.imagesSlide.length > 1 &&
              <div className={style.containerCarousel}>
                <CarouselHorizNav 
                  imagesMain={imagesMainslide} 
                  imagesNav={imagesNavSlide}
                  nSlides = {item.imagesSlide.length}
                />
              </div>
              }
              <div className={style.containerName}>
                <div className={style.name}>
                  <strong>{item.name}</strong>
                  
                </div>
              </div>
            </div>
            <div className={style.containerDescription}>
                <p><strong>Описание:</strong></p>
                <div className={style.descriptionText}>
                  {documentToReactComponents(JSON.parse(item.description.raw))}
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