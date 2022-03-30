import React from 'react'
import * as styles from './css/Footer.css.jsx'
import { HashLink } from 'react-router-hash-link'

export default function Footer() {
  return (
    <styles.Container>
      <styles.ListWrapper>
        <div>
          <ul>
            <HashLink smooth to='/#about' className='list__item'>ABOUT</HashLink>
            <HashLink smooth to='/#benefits' className='list__item'>YOUR BENEFITS</HashLink>
            <HashLink smooth to='/#team' className='list__item'>OUR TEAM</HashLink>
            <HashLink smooth to='/#contact' className='list__item'>CONTACT</HashLink>
          </ul>
        </div>

        <div>
          <ul>
            <HashLink to='#' className='list__item'>IMPRINT</HashLink>
            <HashLink to='#' className='list__item'>DATA PRIVACY</HashLink>
            <HashLink to='#' className='list__item'>CARRERS</HashLink>
          </ul>
        </div>
      </styles.ListWrapper>

      <styles.Copyright>
        <span>&copy; 360X ART AG</span>
      </styles.Copyright>
    </styles.Container>
  )
}
