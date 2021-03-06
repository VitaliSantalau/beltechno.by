/* https://fontawesome.com/how-to-use/on-the-web/using-with/react */

import style from "./phone.module.css";
import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'



export default function Phone() {
  
  return (
    <>
      <div className={style.container}>
        <div className={style.faPhoneAlt}>
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        <a className={style.phone} href="tel:+375295723781" >+375 29 5723781</a>
      </div>
      <div className={style.containerMobile}>
        <a className={style.faPhoneSquareAlt} href="tel:+375295723781">
          <FontAwesomeIcon icon={faPhoneSquareAlt} />
        </a>
      </div>
  </>
  )
}