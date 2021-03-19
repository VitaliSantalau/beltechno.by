import style from "./navSection.module.css";
import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default function NavSection() {
  const data = useStaticQuery(graphql`
    {
      rolls: file(relativePath: {eq: "rolls.png"}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cars: file(relativePath: {eq: "cars.png"}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cups: file(relativePath: {eq: "cups.png"}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vegetables: file(relativePath: {eq: "vegetables.png"}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <nav className={style.nav}>
      <div className={style.row}>
        <Link to="/rolls/">
          <div className={style.rolls}>
            <Img 
              fluid={data.rolls.childImageSharp.fluid}
              alt="this is a rolls"
            />
          </div> 
        </Link>
        <Link to="/cars/">
          <div className={style.cars}>
            <Img 
              fluid={data.cars.childImageSharp.fluid}
              alt="this is a cars"
            />
          </div>
        </Link>
      </div>
      <div className={style.row}>
        <Link to="/cups/">
          <div className={style.cups}>
            <Img 
              fluid={data.cups.childImageSharp.fluid}
              alt="this is a cups"
            />
          </div>
        </Link>
        <Link to="/vegetables/">
          <div className={style.vegetables}>
            <Img 
              fluid={data.vegetables.childImageSharp.fluid}
              alt="this is a vegetables"
            />
          </div>
        </Link>
      </div>      
    </nav>
  )
}