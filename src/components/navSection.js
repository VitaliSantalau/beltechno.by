import * as React from "react"
import { Link } from "gatsby"
import style from "./navSection.module.css";


export default function NavSection() {
  
  return (
    <nav className={style.nav}>
      <div className={style.row}>
        <Link to="/rolls/">
          <div className={style.rolls}></div>
        </Link>
        <Link to="/cars/">
          <div className={style.cars}></div>
        </Link>
      </div>
      <div className={style.row}>
        <Link to="/cups/">
          <div className={style.cups}></div>
        </Link>
        <Link to="/vegetables/">
          <div className={style.vegetables}></div>
        </Link>
      </div>      
    </nav>
  )
}