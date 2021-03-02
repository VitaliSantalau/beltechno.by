import style from "../style/contacts.module.css"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"


export default function Contacts() {
  return (
    <>
      <SEO 
        title="Контакты"
        pathname="/contacts/"  
      />
      <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            <h1 className={style.title}>- Контакты -</h1>
            <section className={style.container}>
              <p>Общество с ограниченной ответственностью «Белтехногрин»</p>
              <p>УНП</p>
              <p>etc</p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}