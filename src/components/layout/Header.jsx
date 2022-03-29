import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Container>
      <ImgWrapper>
        <Link to='/'>
          <img src="/images/logo.png" alt="logo do site" />
        </Link>
      </ImgWrapper>

      <MenuWrapper>
        <ul>
          <Link to='#about' className='menu__item'><span>ABOUT</span></Link>
          <Link to='#benefits' className='menu__item'>YOUR BENEFITS</Link>
          <Link to='#team' className='menu__item'>OUR TEAM</Link>
          <Link to='#contact' className='menu__item'>CONTACT</Link>
        </ul>
      </MenuWrapper>
    </Container>
  )
}


const Container = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  position: fixed;
`

const ImgWrapper = styled.div`
  width: 50%;

  img{
    width: 50px;
  }
`

const MenuWrapper = styled.div`
  width: 50%;

  ul{ 
    display: flex;
    justify-content: space-between;

    .menu__item{
      color: #490139;
      font-size: 1.1rem;
      font-weight: 500;
      letter-spacing: 2px;
      text-transform: uppercase;
      border-bottom: 1px solid transparent;
      transition: 0.1s ease-in-out border;

      &:hover{
        border-bottom: 1px solid #333;
      }
    }
  }
`
