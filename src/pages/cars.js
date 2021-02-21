import style from "../style/cars.module.css"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"


export const query = graphql`
  {
    allContentfulCar {
      edges {
        node {
          id
          name
          description1
          description2
          value1
          value2
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


export default function Cars({ data }) {
  
  return (
    <>
      <SEO 
        title="Автомобили"
        pathname="/cars"  
      />
      <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            <div className={style.containerListItems}>
            {data.allContentfulCar.edges.map(({ node:car }) => (
              <div key={car.id} className={style.containerItem}>
                <div className={style.containerVisiblePartItem}>
                  <div className={style.containerImageItem}>
                    <Img fluid={car.image.fluid} className={style.image}/>
                  </div>
                  <div className={style.containerNameItem}>
                    {car.name}
                  </div>
                  <div className={style.containerDescriptionItem}>
                    <div className={style.containerDescriptionItemLine}>
                      <span>{car.description1}</span>
                      <span>{car.value1}</span>
                    </div>
                    <div className={style.containerDescriptionItemLine}>
                      <span>{car.description2}</span>
                      <span>{car.value2}</span>
                    </div>
                  </div>
                </div>
                <div className={style.containerButtonItem}>
                  <div className={style.containerVisibleArea}>
                    <Link to={`/cars/${car.id}`} className={style.buttonItem}>
                      Выбрать этот товар
                    </Link>
                  </div>
                </div>
              </div>
            ))}            
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
