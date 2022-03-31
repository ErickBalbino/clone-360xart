import styled from 'styled-components'

export const Container = styled.main`
`

export const FirstSection = styled.div`
  background-color: #FF4F43;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  overflow-y: hidden;

  h1{
    color: #490139;
    font-size: 6rem;
    font-weight: 400;
    padding: 80px 40px;
    line-height: 1.3;

    @media (max-width: 768px) {
      &{
        font-size: 2.2rem;
        padding: 20px;
        letter-spacing: 2px;
      }
    }
  }
`

export const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`

export const TextWrapper = styled.div`
  width: 80vw;

  h2{
    color: #FF4F43;
    text-align: center;
    font-size: 5rem;
    font-weight: 400;
    padding-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 2.2rem;
      padding-bottom: 20px;
    }
  }

  p{
    text-align: center;
    color: #490139;
    font-size: 1.6rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      text-align: left;
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    &{
      width: 90vw;
    }
  }
`


export const ThirdSection = styled.div`
  
`

export const GroupButtons = styled.div`
  width: 100vw;
  display: flex;

  .button__right,
  .button__left{
    width: 50vw;
    outline: transparent;
    height: 80px;
    font-size: 1.2rem;
    border: none;
    
    &:hover{
      cursor: pointer;
    }

    @media (max-width: 768px) {
      font-size: 1.05rem;
      height: 60px;
    }
  }

  .button__right{
    background-color: #FF4F43;
    color: #490139;
    border-bottom: 1px solid #490139;
  }

  .button__left{
    background-color: #490139;
    color: #FF4F43;
    border-bottom: 1px solid #FF4F43;
  }
`

export const InfoWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    height: 1000px;
    overflow-y: hidden;
    background-color: #FF4F43;
`

export const FirstInfo = styled.div`
  background-color: #FF4F43;
  padding: 100px 40px;
  position: absolute;

  .text__container{
    display: flex;
    justify-content: space-between;
    color: #490139;

    h3{
      width: 50%;
      font-size: 5rem;
      font-weight: 400;
      line-height: 1.2;
      overflow: hidden;

      @media (max-width: 768px) {
        width: 100%;
        font-size: 2.2rem;
      }
    }

    p{
      width: 46%;
      font-size: 1.7rem;
      padding-top: 60px;

      @media (max-width: 768px) {
        width: 100%;
        font-size: 1.05rem;
        padding-top: 30px;
      }
    }

    @media (max-width: 768px) {
      &{
        flex-direction: column;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const SecondInfo = styled(FirstInfo)`
  background-color: #490139;
  

  .text__container{
    display: flex;
    justify-content: space-between;

    h3{
      color: #FF4F43;
    }

    p{
      color: #FF4F43;
    }
  }
`

export const FourthSection = styled(SecondSection)`

`