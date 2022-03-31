import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from './css/Sliders.css.jsx'

export default function Sliders() {

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  }

  return (
    <styles.Carousel {...settings}>
        <Wrap>
            <h3>1</h3>
        </Wrap>

        <Wrap>
            <h3>2</h3>
        </Wrap>

        <Wrap>
            <h3>3</h3>
        </Wrap>

        <Wrap>
            <h3>4</h3>
        </Wrap>
    </styles.Carousel>
  )
}
