import * as React from "react"
import { Link } from "gatsby"
import style from "./header.module.css"
import Logo from "./logo"
import NavPage from "./navPage"

export default function Header() {
  
  return (
    <header className={style.header}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={style.containerNavPage}>
        <NavPage />
      </div>
    </header>
  )
};