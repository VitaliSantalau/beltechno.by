import style from "./vegetable.module.css"
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/SEO" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'



export const query = graphql`
  query($slug: String!) {
    contentfulVegetable(id: { eq: $slug }) {
      id
      name
      image {
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
    }
  }
`
         

const ItemCard = ({ data }) => {
  const item = data.contentfulVegetable
  
  return (
    <>
      <SEO 
        title={item.name} 
        description={`Подробная информация о ${item.name}`} 
        pathname={`/vegetables/${item.id}`}
      />
       <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            <Link to="/vegetables/" className={style.containerBack}>
              <FontAwesomeIcon icon={faLongArrowAltLeft} className={style.arrow}/>
              <div className={style.text}>Вернуться к списку</div>
            </Link>
            <div className={style.containerImageName}>
              <div className={style.containerImage}>
                <Img fluid={item.image.fluid} className={style.image}/>
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