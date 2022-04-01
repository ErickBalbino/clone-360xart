import React from 'react'
import * as styles from './css/Header.css.jsx'
import { HashLink } from 'react-router-hash-link';

export default function Header() {

  const showMenu = () => {
    document.getElementById('sidebar').style.transform = 'translate(0, 1px)'
    document.getElementById('btn__open').style.display = 'none'
    document.getElementById('btn__close').style.display = 'flex'
  }

  const closeMenu = () => {
    document.getElementById('sidebar').style.transform = 'translate(0, -100%)'
    document.getElementById('btn__open').style.display = 'flex';
  }

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
        <button id='btn__open' onClick={() => {showMenu()}}>
          MENU
        </button>

        <div className='sidebar__container' id='sidebar'>
          <button className='sidebar__btnClose' id='btn__close' onClick={() => {closeMenu()}}>CLOSE</button>

          <nav>
            <ul>
              <HashLink 
                to='/#about' 
                className='list__item' 
                onClick={() => {closeMenu()}}
              >
                ABOUT
              </HashLink>

              <HashLink 
                to='/#benefits' 
                className='list__item' 
                onClick={() => {closeMenu()}}
              >
                YOUR BENEFITS
              </HashLink>

              <HashLink 
                to='/#team' 
                className='list__item' 
                onClick={() => {closeMenu()}}
              >
                TEAM
              </HashLink>

              <HashLink 
                to='/#contact' 
                className='list__item' 
                onClick={() => {closeMenu()}}
              >
                CONTACT
              </HashLink>
            </ul>
          </nav>
        </div>
      </styles.Sidebar>
    </styles.Container>
  )
}


