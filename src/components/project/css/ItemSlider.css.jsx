import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    width: 15vw;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 100px;
        margin-bottom: 50px;

        @media (max-width: 768px) {
            margin-bottom: 30px;
        }
    }

    h3, p{
        color: #490139;
    }

    h3{
        font-size: 1.2rem;
        font-weight: 400;
        padding-bottom: 10px;
    }

    p{
        text-align: center;
        font-size: 0.9rem;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        width: 80vw;
    }
`