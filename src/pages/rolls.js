import style from "../style/rolls.module.css"
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
    allContentfulPaper {
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



export default function Rolls({ data }) {
  const [isShowFeedbackForm, setIsShowFeedback] = useState(false)

  const handleShowFeedback = () => {
    isShowFeedbackForm ? setIsShowFeedback(false) : setIsShowFeedback(true)
  }

  return (
    <>
      <SEO 
        title="Бумага"
        pathname="/rolls/"  
      />
      <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            <section className={style.containerHeaderSection}>
              <h1 className={style.title}>Бумага для изготовления упаковки</h1>
              <div className={style.containerPhrases}>
                <p>мы готовы поставить для Вас</p>
                <p className={style.wordAny}>любой</p>
                <p>объём бумаги</p>
              </div>
              <button className={style.buttonOrder} onClick={handleShowFeedback}>Заявка</button>
              { isShowFeedbackForm && <FeedbackForm handleShowFeedback={handleShowFeedback} /> }              
            </section>
          <div className={style.containerListItems}>
            {data.allContentfulPaper.edges.map(({ node:roll }) => (
              <Link to={`/rolls/${roll.id}`} key={roll.id} className={style.containerItem}>
                <div className={style.containerVisiblePartItem}>
                  <div className={style.containerImageItem}>
                    <Img fluid={roll.image.fluid} className={style.image}/>
                  </div>
                  <div className={style.containerNameItem}>
                    {roll.name}
                  </div>
                </div>
                <div className={style.containerUnVisiblePartItem}>
                  <div className={style.containerButtonArea}>
                    <div className={style.buttonItem}>
                      Выбрать этот товар
                    </div>
                  </div>
                </div>
                {roll.state ?
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
