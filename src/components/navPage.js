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
      <Link to="/about" activeClassName={style.activeLink}>
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
        <Link to="/">
          <div onClick={handleClickIconNavPage}>Главная</div>
        </Link>
        <Link to="/about">
          <div>О компании</div>
        </Link>
        <Link to="/catalog">
          <div>Каталог</div>
        </Link>
        <Link to="/contacts">
          <div>Контакты</div>
        </Link>
        <Link to="/">
          <div className={style.navSection}>
            Бумага
          </div>
        </Link>
        <Link to="/">
          <div className={style.navSection}>
            Автомобили
          </div>
        </Link>
        <Link to="/">
          <div className={style.navSection}>
            Посуда
          </div>
        </Link>
        <Link to="/">
          <div className={style.navSection}>
            Овощи
          </div>  
        </Link>
      </nav>
    </div>
    </>
  )
}