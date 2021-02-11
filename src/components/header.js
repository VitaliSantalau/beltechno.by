import * as React from "react"
import { Link } from "gatsby"
import style from "./header.module.css";
import Logo from "./logo"

export default function Header() {
  
  return (
    <header className={style.header}>
      <Link to="/">
        <Logo />
      </Link>
    </header>
  )
};