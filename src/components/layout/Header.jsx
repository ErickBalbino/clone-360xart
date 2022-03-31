import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from './css/Header.css.jsx'
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <styles.Container>
      <styles.ImgWrapper>
        <HashLink smooth to='/'>
          <img src="/images/logo.png" alt="logo do site" />
        </HashLink>
      </styles.ImgWrapper>

      <styles.MenuWrapper>
        <ul>
          <HashLink smooth to='/#about' className='menu__item'>ABOUT</HashLink>
          <HashLink smooth to='/#benefits' className='menu__item'>YOUR BENEFITS</HashLink>
          <Link to='/#team' className='menu__item'>OUR TEAM</Link>
          <Link to='/#contact' className='menu__item'>CONTACT</Link>
        </ul>
      </styles.MenuWrapper>

      <styles.Sidebar>
        <button>
          MENU
        </button>
      </styles.Sidebar>
    </styles.Container>
  )
}


