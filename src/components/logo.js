import * as React from "react"
import style from "./logo.module.css";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default function Logo() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={style.container}>
      <Img className={style.logo}
           fluid={data.file.childImageSharp.fluid}
           alt="this is a logo"
      />
    </div>
  )
};