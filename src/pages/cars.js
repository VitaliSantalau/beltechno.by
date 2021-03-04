import style from "../style/cars.module.css"
import React, { useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import FeedbackForm from "../components/feedbackForm"



export const query = graphql`
  {
    allContentfulCar {
      edges {
        node {
          id
          name
          state
          imageMain {
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



export default function Cups({ data }) {
  const [isShowFeedbackForm, setIsShowFeedback] = useState(false)

  const handleShowFeedback = () => {
    isShowFeedbackForm ? setIsShowFeedback(false) : setIsShowFeedback(true)
  }

  return (
    <>
      <SEO 
        title="Автомобили"
        pathname="/cars/"  
      />
      <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            <section className={style.containerHeaderSection}>
              <h1 className={style.title}>Автомобили</h1>
              <div className={style.containerPhrases}>
                <p>мы готовы поставить для Вас</p>
                <p className={style.wordAny}>любой</p>
                <p>атомобиль</p>
              </div>
              <button className={style.buttonOrder} onClick={handleShowFeedback}>Заявка</button>
              { isShowFeedbackForm && <FeedbackForm handleShowFeedback={handleShowFeedback} /> }              
            </section>
          <div className={style.containerListItems}>
            {data.allContentfulCar.edges.map(({ node: car }) => (
              <Link to={`/cars/${car.id}`} key={car.id} className={style.containerItem}>
                <div className={style.containerVisiblePartItem}>
                  <div className={style.containerImageItem}>
                    <Img fluid={car.imageMain.fluid} className={style.image}/>
                  </div>
                  <div className={style.containerNameItem}>
                    {car.name}
                  </div>
                </div>
                <div className={style.containerUnVisiblePartItem}>
                  <div className={style.containerButtonArea}>
                    <div className={style.buttonItem}>
                      Выбрать этот товар
                    </div>
                  </div>
                </div>
                {car.state ?
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
