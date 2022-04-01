import React from 'react'
import * as styles from './css/Square.css.jsx'
import { HashLink } from 'react-router-hash-link'
import { FaArrowRight } from 'react-icons/fa'

export default function Square({ title, btnText, cssConditional }) {
  return (
    <HashLink to='/#contact'>
        <styles.Container
            style={cssConditional === 'FirstSquare' ? {backgroundColor: '#FF4F43', marginTop: '50px'} : {backgroundColor: '#490139'}}
        >
            <h3
                style={cssConditional === 'FirstSquare' ? {color: '#490139'} : {color: '#FF4F43'}}
            >
                {title}
            </h3>
            <button
                style={cssConditional === 'FirstSquare' ? {color: '#490139'} : {color: '#FF4F43'}}
                className='btnText'
            >
                <FaArrowRight className='icon' /> {btnText}
            </button>

        </styles.Container>
    </HashLink>
  )
}
