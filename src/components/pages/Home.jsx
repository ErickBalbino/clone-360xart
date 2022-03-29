import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
      <FirstSection>
        <h1>Articipate now in tokenized masterpieces</h1>
      </FirstSection>
    </Container>
  )
}


const Container = styled.main`
`

const FirstSection = styled.div`
  background-color: #FF4F43;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;

  h1{
    color: #490139;
    font-size: 6rem;
    font-weight: 400;
    padding: 80px 40px;
    line-height: 1.3;
  }
`