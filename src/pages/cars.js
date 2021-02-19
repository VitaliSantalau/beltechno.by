import style from "../style/cars.module.css"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"
import { Link } from "gatsby"
import auto from "../images/auto.jpeg"




export default function Cars() {
  return (
    <>
      <SEO 
        title="Машины"
        pathname="/cars"  
      />
      <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            <div className={style.containerListItems}>
              <div className={style.containerItem}>
                <div className={style.containerVisiblePartItem}>
                  <div className={style.containerImageItem}>
                    <img src={auto} className={style.image}/>
                  </div>
                  <div className={style.containerNameItem}>
                    Наименование товара
                  </div>
                  <div className={style.containerDescriptionItem}>
                    <div className={style.containerDescriptionItemLine}>
                      <span>Первая характеристика</span>
                      <span>значение</span>
                    </div>
                    <div className={style.containerDescriptionItemLine}>
                      <span>Вторая характеристика</span>
                      <span>значение</span>
                    </div>
                  </div>
                </div>
                <div className={style.containerButtonItem}>
                  <div className={style.containerVisibleArea}>
                    <Link to="/#" className={style.buttonItem}>
                      Выбрать этот товар
                    </Link>
                  </div>
                </div>
              </div>
              <div className={style.containerItem}>
                <div className={style.containerVisiblePartItem}>
                  <div className={style.containerImageItem}>
                    <img src={auto} className={style.image}/>
                  </div>
                  <div className={style.containerNameItem}>
                    Наименование товара
                  </div>
                  <div className={style.containerDescriptionItem}>
                    <div className={style.containerDescriptionItemLine}>
                      <span>Первая характеристика</span>
                      <span>значение</span>
                    </div>
                    <div className={style.containerDescriptionItemLine}>
                      <span>Вторая характеристика</span>
                      <span>значение</span>
                    </div>
                  </div>
                </div>
                <div className={style.containerButtonItem}>
                  <div className={style.containerVisibleArea}>
                    <Link to="/#" className={style.buttonItem}>
                      Выбрать этот товар
                    </Link>
                  </div>
                </div>
              </div>
              <div className={style.containerItem}>
                <div className={style.containerVisiblePartItem}>
                  <div className={style.containerImageItem}>
                    <img src={auto} className={style.image}/>
                  </div>
                  <div className={style.containerNameItem}>
                    Наименование товара
                  </div>
                  <div className={style.containerDescriptionItem}>
                    <div className={style.containerDescriptionItemLine}>
                      <span>Первая характеристика</span>
                      <span>значение</span>
                    </div>
                    <div className={style.containerDescriptionItemLine}>
                      <span>Вторая характеристика</span>
                      <span>значение</span>
                    </div>
                  </div>
                </div>
                <div className={style.containerButtonItem}>
                  <div className={style.containerVisibleArea}>
                    <Link to="/#" className={style.buttonItem}>
                      Выбрать этот товар
                    </Link>
                  </div>
                </div>
              </div>
              <div className={style.containerItem}>
                <div className={style.containerVisiblePartItem}>
                  <div className={style.containerImageItem}>
                    <img src={auto} className={style.image}/>
                  </div>
                  <div className={style.containerNameItem}>
                    Наименование товара
                  </div>
                  <div className={style.containerDescriptionItem}>
                    <div className={style.containerDescriptionItemLine}>
                      <span>Первая характеристика</span>
                      <span>значение</span>
                    </div>
                    <div className={style.containerDescriptionItemLine}>
                      <span>Вторая характеристика</span>
                      <span>значение</span>
                    </div>
                  </div>
                </div>
                <div className={style.containerButtonItem}>
                  <div className={style.containerVisibleArea}>
                    <Link to="/#" className={style.buttonItem}>
                      Выбрать этот товар
                    </Link>
                  </div>
                </div>
              </div>
              <div className={style.containerItem}>
                <div className={style.containerVisiblePartItem}>
                  <div className={style.containerImageItem}>
                    <img src={auto} className={style.image}/>
                  </div>
                  <div className={style.containerNameItem}>
                    Наименование товара
                  </div>
                  <div className={style.containerDescriptionItem}>
                    <div className={style.containerDescriptionItemLine}>
                      <span>Первая характеристика</span>
                      <span>значение</span>
                    </div>
                    <div className={style.containerDescriptionItemLine}>
                      <span>Вторая характеристика</span>
                      <span>значение</span>
                    </div>
                  </div>
                </div>
                <div className={style.containerButtonItem}>
                  <div className={style.containerVisibleArea}>
                    <Link to="/#" className={style.buttonItem}>
                      Выбрать этот товар
                    </Link>
                  </div>
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
