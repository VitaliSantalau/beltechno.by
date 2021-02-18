import style from "../style/vegetables.module.css"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"




export default function Vegetables() {
  return (
    <>
      <SEO 
        title="Овощи"
        pathname="/vegetables"  
      />
      <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
          Овощи
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
