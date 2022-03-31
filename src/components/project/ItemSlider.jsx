import React from 'react'
import * as styles from './css/ItemSlider.css.jsx'

export default function ItemSlider({ srcImage, alt, title, description, textCondition }) {
  return (
    <styles.Container>
        <img src={srcImage} alt={alt} />
        <h3 
            style={textCondition === 'FirstSlide' ? {color: '#490139'} : {color: '#FF4F43'}}
        >
            {title}
        </h3>
        <p 
            style={textCondition === 'FirstSlide' ? {color: '#490139'} : {color: '#FF4F43'}}
        >
            {description}
        </p>
    </styles.Container>
  )
}
