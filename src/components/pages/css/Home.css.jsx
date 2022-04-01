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
        padding: 80px 20px;
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
    padding: 90px 0;
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
      font-size: 2.7rem;
      line-height: 1.3;
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


export const SquareContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 100px 0;

  @media (max-width: 768px) {
    flex-direction: column;
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
  height: 1100px;
  background-color: #FF4F43;
  overflow-y: hidden;

  @media (max-width: 768px) {
    height: 850px;
  }
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
        width: 95vw;
      }
    }
  }

  .images__container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    padding: 100px; 

    @media (max-width: 768px) {
      padding: 70px 0;
      overflow: scroll;
    }
  }

  @media (max-width: 768px) {
    box-sizing: border-box;
    padding: 40px 10px;
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

  .images__container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    padding: 100px 200px; 

    @media (max-width: 768px) {
      display: flex;
      padding: 70px 0;
    }
  }
`


export const FourthSection = styled(SecondSection)`

`


export const TeamContainer = styled.div`
  background-color: #F8F7F3;
  padding: 100px 0px;
`


export const TextDescription = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100vw;

  .title__team{
    width: 50vw;

    h2{
      color: #FF4F43;
      font-size: 5rem;
      font-weight: 400;
      padding-left: 40px;

      @media (max-width: 768px) {
        font-size: 2.7rem;
        padding-left: 0;
        padding-bottom: 30px;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .description__team{
    width: 50vw;

    p{
      color: #490139;
      font-size: 1.6rem;
      line-height: 1.5;
      width: 90%;

      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }

    button{
      background-color: #FF4F43;
      color: #490139;
      border: transparent;
      outline: tr ansparent;
      padding: 15px 50px;
      display: flex;
      align-items: center;
      font-size: 1.1rem;
      margin: 40px 0;
      box-shadow: 4px 4px 8px #b33b3258;
      transition: 0.2s ease-in-out background-color;

      .icon{
        font-size: 0.9rem;
        margin: 0 5px;
      }

      &:hover{
        cursor: pointer;
        background-color: #490139;
        color: #FF4F43;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    &{
      flex-direction: column;
      padding: 0px 15px;
    }
  }
`


export const ImagesDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  padding: 50px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


export const FormContainer = styled.div`
  width: 100vw;
  background-color: #490139;
  padding: 150px 30px;
  display: flex;

  .title__container{
    width: 47vw;
    padding: 0 20px;

    h2{
      color: #FF4F43;
      font-size: 5rem;
      font-weight: 400;
      line-height: 1.3;
      overflow-y: hidden;

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0;
    }
  }

  .form__container{
    width: 47vw;
    padding-left: 50px;
    box-sizing: border-box;

    fieldset{
      width: 100%;
      border: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px;
      margin: 20px 0;

      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 0;
        grid-gap: 0;
      }
    }

    .container__send{
      display: flex;
      align-items: center;
      justify-content: space-between;

      .send__button{
        width: 25%;

        button{
          background-color: #FF4F43;
          color: #490139;
          border: none;
          outline: none;
          height: 60px;
          width: 100%;
          padding: 0 40px;
          font-size: 1.1rem;
          text-align: center;
          transition: 0.2s ease-in-out background-color;

          &:hover{
            cursor: pointer;
            color: #490139;
            background-color: #fff;
          }
        }

        @media (max-width: 768px) {
          width: 40%;
          margin: 20px 0;
        }
      }

      .send_confirmTerms{
        width: 70%;

        .label{
          display: flex;
          align-items: center;
          height: 60px;

          input[type='checkbox']{
            all: unset;
            height: 20px;
            width: 40px;
            background-color: transparent;
            border: 1px solid #FF4F43;
            margin-right: 10px;

            &:checked{
              background-color: #FF4F43;
            }

            @media (max-width: 768px) {
              height: 15px;
            }
          }

          &:hover{
            cursor: pointer;
          }
        }

        .span,
        p{
          font-size: 0.55rem;
          color: #FF4F43;

          @media (max-width: 768px) {
            font-size: 0.65rem;
          }
        }

        @media (max-width: 768px) {
          width: 100%;
          margin: 10px 0;
        }
      }

      @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: flex-start;
      }
    }


    @media (max-width: 768px) {
      width: 100%;
      padding-left: 0;
      padding-top: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 150px 15px;
    flex-direction: column;
  }
`