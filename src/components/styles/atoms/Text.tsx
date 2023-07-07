import styled from "styled-components";

export const A = styled.a`
    text-decoration: none;
    color: #546A7B;
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: #fff;
    }
    `

export const P_Hero = styled.p`
    color: #fff;
    font-size: 3rem;
    padding: 5%;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }`

export const P = styled.p`
    color: black;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }`

export const Label = styled.label`
    color: black;
    font-size: 0.8rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-top: 10px;
    `
