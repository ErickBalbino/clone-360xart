import React from 'react'
import * as styles from './css/Header.css.jsx'
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <styles.Container id='header'>
      <styles.ImgWrapper>
        <a href='#'>
          <img src="/images/logo.png" alt="logo do site" />
        </a>
      </styles.ImgWrapper>

      <styles.MenuWrapper>
        <ul>
          <HashLink smooth to='/#about' className='menu__item'>ABOUT</HashLink>
          <HashLink smooth to='/#benefits' className='menu__item'>YOUR BENEFITS</HashLink>
          <HashLink smooth to='/#team' className='menu__item'>OUR TEAM</HashLink>
          <HashLink smooth to='/#contact' className='menu__item'>CONTACT</HashLink>
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


