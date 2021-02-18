import style from "../style/cups.module.css"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"




export default function Cups() {
  return (
    <>
      <SEO 
        title="Посуда"
        pathname="/cups"  
      />
      <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
          Посуда
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
