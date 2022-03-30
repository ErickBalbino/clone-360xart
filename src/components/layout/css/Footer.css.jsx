import React from 'react'
import styled from 'styled-components'

export const Container = styled.footer`
    width: 100vw;
    padding: 60px 40px 100px 40px;
    background-color: #FF4F43;
    display: flex;
`

export const ListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;

    ul{
        display: flex;
        flex-direction: column;

        .list__item{
            color: #490139;
            font-size: 1.4rem;
            line-height: 2;
        }
    }
`

export const Copyright = styled.div`
    width: 65%;
    display: flex;
    justify-content: flex-end;

    span{
        color: #490139;
        font-size: 1.2rem;
    }
`