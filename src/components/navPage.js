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
      <Link to="/">
        Главная
      </Link>
      <Link to="/about">
        О компании
      </Link>
      <Link to="/catalog">
        Каталог
      </Link>
      <Link to="/contacts">
        Контакты
      </Link>
    </nav>
    <div className={styleIconNavPage} onClick={handleClickIconNavPage}></div>
    <div className={styleOverlayNavPage}>
      <nav className={style.navMobile}>
        <Link to="/">
          <div onClick={handleClickIconNavPage}>Главная</div>
        </Link>
        <Link to="/about">
          О компании
        </Link>
        <Link to="/catalog">
          Каталог
        </Link>
        <Link to="/contacts">
          Контакты
        </Link>
        <Link to="/contacts">
          <div className={style.navSection}>
            Бумага
          </div>
        </Link>
        <Link to="/contacts">
        <div className={style.navSection}>
          Автомобили
        </div>
        </Link>
        <Link to="/contacts">
        <div className={style.navSection}>
          Посуда
        </div>
        </Link>
        <Link to="/contacts">
        <div className={style.navSection}>
          Овощи
        </div>  
        </Link>
      </nav>
    </div>
    </>
  )
}