import * as React from "react"
import { Link } from "gatsby"
import style from "./navSection.module.css";


export default function NavSection() {
  
  return (
    <nav className={style.nav}>
      <div className={style.row}>
      <Link to="/">
        <div className={style.rolls}></div>
      </Link>
      <Link to="/">
        <div className={style.cars}></div>
      </Link>
      </div>
      <div className={style.row}>
      <Link to="/">
        <div className={style.cups}></div>
      </Link>
      <Link to="/">
        <div className={style.vegetables}></div>
      </Link>
      </div>      
    </nav>
  )
}