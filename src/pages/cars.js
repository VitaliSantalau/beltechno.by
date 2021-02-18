import style from "../style/cars.module.css"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"




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
          Машины
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
