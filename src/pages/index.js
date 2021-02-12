import style from "../style/home.module.css"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"
import video from "../video/video-background.mp4"
import NavSection from "../components/navSection"



export default function Home() {
  return (
    <>
      <SEO 
        title="Главная"
        pathname="/"  
      />
      <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
            <section className={style.containerNavSection}>
              <NavSection />
            </section>
          </div>
        </main>
        <Footer />
        <video className={style.video} loop autoPlay muted>
          <source src={video} type="video/mp4"/>
        </video>
        <div className={style.shield}></div>
      </div>
    </>
  )
}
