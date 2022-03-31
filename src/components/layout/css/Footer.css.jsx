import React from 'react'
import styled from 'styled-components'

export const Container = styled.footer`
    width: 100vw;
    padding: 60px 40px 100px 40px;
    background-color: #FF4F43;
    display: flex;

    @media (max-width: 768px) {
        &{
            padding: 60px 15px 20px 15px;
            flex-direction: column;
        }
    }
`

export const ListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;

    ul{
        display: flex;
        flex-direction: column;
        
        @media (max-width: 768px) {
            width: 100%;
        }

        .list__item{
            color: #490139;
            font-size: 1.4rem;
            line-height: 2;

            @media (max-width: 768px) {
                font-size: 0.85rem;
            }
        }
    }

    @media (max-width: 768px) {
        &{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
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

        @media (max-width: 768px) {
            font-size: 0.85rem;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        padding-top: 60px;
    }
`