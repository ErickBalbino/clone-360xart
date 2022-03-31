import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 650px;
    color: #490139;

    img{
        width: 100%;
        height: 350px;
        object-fit: cover;
        object-position: center;
    }

    .title__container{
        padding: 30px 0;

        h3{
            font-size: 1.8rem;
            font-weight: 500;
        }
    }

    .description__container{
        padding-bottom: 30px;

        span{
            font-size: 0.9rem;
        }
    }

    a{
        color: #FF4F43;
        display: flex;
        align-items: center;
        font-size: 1rem;

        .icon{
            font-size: 0.85rem;
            margin-right: 4px;
        }
    }
`
