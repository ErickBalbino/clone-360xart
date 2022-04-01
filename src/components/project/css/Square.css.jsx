import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    width: 43vw;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 0 30px; 
    margin: 0 50px;

    h3{
        font-size: 2.8rem;
        font-weight: 400;
        line-height: 1.3;
        overflow-y: hidden;
    }

    .btnText{
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        padding: 20px 0px;

        .icon{
            font-size: 0.9rem;
            margin-right: 5px;
        }
    }

    @media (max-width: 768px) {
        width: 80vw;
    }
`