import style from "./navPage.module.css"
import React, { useState } from "react"
import { Link } from "gatsby"



export default function NavPage() {
  const [isActiveIconNavPage, setIsActiveIconNavPage] = useState(false)
  const styleIconNavPage =  isActiveIconNavPage ?
    style.iconNavPageActive : style.iconNavPage
    
  const styleOverlayNavPage =  isActiveIconNavPage ?
    style.overlayActive : style.overlay

  const handleClickIconNavPage = () => {
    isActiveIconNavPage ?
    setIsActiveIconNavPage(false) :
    setIsActiveIconNavPage(true)
  }

  return (
    <>
    <nav className={style.nav}>
      <Link to="/" activeClassName={style.activeLink}>
        Главная
      </Link>
      <Link to="/about/" activeClassName={style.activeLink}>
        О компании
      </Link>
      <Link to="/catalog" activeClassName={style.activeLink}>
        Каталог
      </Link>
      <Link to="/contacts" activeClassName={style.activeLink}>
        Контакты
      </Link>
    </nav>
    <div className={styleIconNavPage} onClick={handleClickIconNavPage}></div>
    <div className={styleOverlayNavPage}>
      <nav className={style.navMobile}>
        <div className={style.containerNavPage}>
          <Link to="/">
            <div onClick={handleClickIconNavPage}>Главная</div>
          </Link>
          <Link to="/about">
            <div onClick={handleClickIconNavPage}>О компании</div>
          </Link>
          <Link to="/catalog">
            <div onClick={handleClickIconNavPage}>Каталог</div>
          </Link>
          <Link to="/contacts">
            <div onClick={handleClickIconNavPage}>Контакты</div>
          </Link>
        </div>
        <div className={style.containerNavSection}>
          <Link to="/rolls">
            <div className={style.navSection} onClick={handleClickIconNavPage}>
              Бумага
            </div>
          </Link>
          <Link to="/cars">
            <div className={style.navSection} onClick={handleClickIconNavPage}>
              Автомобили
            </div>
          </Link>
          <Link to="/cups">
            <div className={style.navSection} onClick={handleClickIconNavPage}>
              Посуда
            </div>
          </Link>
          <Link to="/vegetables">
            <div className={style.navSection} onClick={handleClickIconNavPage}>
              Овощи
            </div>  
          </Link>
        </div>
      </nav>
    </div>
    </>
  )
}