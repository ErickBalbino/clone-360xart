import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  z-index: 4;
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
`
