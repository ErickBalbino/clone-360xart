import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  z-index: 4;

  @media (max-width: 768px) {
    &{
      padding: 15px;
    }
  }
`

export const ImgWrapper = styled.div`
  width: 50%;

  img{
    width: 50px;
  }
`

export const MenuWrapper = styled.div`
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

  @media (max-width: 768px) {
    &{
      display: none;
    }
  }
`

export const Sidebar = styled.div`
  display: none;
  width: 50%;

  @media (max-width: 768px) {
    &{
      display: flex;
      justify-content: flex-end;
    }

    button{
      border: transparent;
      outline: transparent;
      background-color: transparent;
      font-size: 1.2rem;
      color: #490139;
    }
  }
`
