import style from "../style/home.module.css"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/SEO"
import videoMP4 from "../video/video-background.mp4"
/*import videoOGG from "../video/video-background.ogg"*/
import videoWEBM from "../video/video-background.webm"
import poster from "../video/posterVideoHomePage.jpg"
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
        <video className={style.video} loop autoPlay muted poster={poster}>
          <source src={videoMP4} type="video/mp4" />
          
          <source src={videoWEBM} type="video/webm" />
        </video>
      </div>
    </>
  )
}