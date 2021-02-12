import * as React from "react"
import { Link } from "gatsby"
import style from "./navPage.module.css";


export default function NavPage() {
  
  return (
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
  )
};