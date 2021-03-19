import style from "../style/section.module.css"
import styleVegetables from "../style/vegetables.module.css"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'



export const query = graphql`
  {
    allContentfulVegetable {
      edges {
        node {
          id
          name
          state
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
        }
      }
    }
  }
`

export default function Vegetables({ data }) {

  return (
    <>
      <SEO 
        title="Овощи"
        pathname="/vegetables/"  
      />
      <div className={style.root}>
        <Header />
        <main className={styleVegetables.main}>
          <div className={style.wrapper}>
            <section className={style.containerHeaderSection}>
              <h1 className={style.title}>Овощи свежие</h1>
              <div className={style.containerPhrases}>
                <p>мы готовы поставить для Вас</p>
                <p className={style.wordAny}>любой</p>
                <p>ассортимент овощей</p>
              </div>              
            </section>
          <div className={style.containerListItems}>
            {data.allContentfulVegetable.edges.map(({ node: vegetable }) => (
              <Link to={`/vegetables/${vegetable.id}`} key={vegetable.id} className={style.containerItem}>
                <div className={style.containerVisiblePartItem}>
                  <div className={style.containerImageItem}>
                    <Img fluid={vegetable.image.fluid} className={style.image}/>
                  </div>
                  <div className={style.containerNameItem}>
                    {vegetable.name}
                  </div>
                </div>
                <div className={style.containerUnVisiblePartItem}>
                  <div className={style.containerButtonArea}>
                    <div className={style.buttonItem}>
                      Выбрать этот товар
                    </div>
                  </div>
                </div>
                {vegetable.state ?
                  <div className={style.containerMarkTrue}>
                    <div className={style.round}>
                      <FontAwesomeIcon icon={faRecordVinyl} />
                    </div>
                    <div className={style.mark}>в наличии</div>
                  </div> 
                  :
                  <div className={style.containerMarkFalse}>
                    <div className={style.round}>
                      <FontAwesomeIcon icon={faRecordVinyl} />
                    </div>
                    <div className={style.mark}>под заказ</div>
                  </div>
                }
              </Link>
            ))}            
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
