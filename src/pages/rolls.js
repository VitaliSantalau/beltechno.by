import style from "../style/rolls.module.css"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"




export default function Rolls() {
  return (
    <>
      <SEO 
        title="Бумага"
        pathname="/rolls"  
      />
      <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            Бумага
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
