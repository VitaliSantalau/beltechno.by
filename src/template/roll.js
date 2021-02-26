import style from "./roll.module.css"
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
    contentfulPaper(id: { eq: $slug }) {
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
      density
      purpose {
        purpose
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
            <Link to="/rolls/" className={style.containerBack}>
              <FontAwesomeIcon icon={faLongArrowAltLeft} className={style.arrow}/>
              <div className={style.text}>Вернуться к списку</div>
            </Link>
            <div className={style.containerImageName}>
              <div className={style.containerImage}>
                <Img fluid={item.image.fluid} className={style.image}/>
              </div>
              <div className={style.containerNameDensity}>
                <div className={style.name}>
                  <strong>{item.name}</strong>
                </div>
                <div className={style.density}>
                  <p><strong>Плотность:</strong> {item.density}</p>
                </div>
              </div>
              <div className={style.containerPurpose}>
                <p><strong>Назначение:</strong></p>
                <div className={style.pusposeText}>
                  {item.purpose.purpose}
                </div>
                
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
