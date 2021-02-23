import style from "./car.module.css"
import React, { Component, useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/SEO"
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'
import Slider from "react-slick"  
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export const query = graphql`
  query($slug: String!) {
    contentfulCar(id: { eq: $slug }) {
      id
      name
      image {
        fluid(toFormat: AUTO, resizingBehavior: SCALE, cropFocus: CENTER) {
          aspectRatio
          base64
          src
          sizes
          srcSet
          srcSetWebp
          srcWebp
        }
      }
      images {
        fluid(toFormat: AUTO, resizingBehavior: SCALE, cropFocus: CENTER) {
          aspectRatio
          base64
          src
          sizes
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
  }
`

/*
<div className={style.containerMainImages}>
                  {item.images.map(image => (
                    <Img fluid={image.fluid} className={style.mainImage}/>
                  ))}
                </div>
*/

const ItemCard = ({ data }) => {
  const item = data.contentfulCar

  
  
  return (
    <>
      <SEO 
        title={item.name} 
        description={`Подробная информация о ${item.name}`} 
        pathname={`/cars/${item.id}`}
      />
       <div className={style.root}>
        <Header />
        <main className={style.main}>
          <div className={style.wrapper}>
<AsNavFor />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default ItemCard;

export class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
          className={style.slider}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          className={style.navSlider}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}