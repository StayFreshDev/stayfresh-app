import styled from "styled-components";

export const H1 = styled.h1`
    color: ${props => props.color}; 
    font-size: 2.5rem;
    font-family: 'Roboto', sans-serif;
    font-style: italic;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
    `

export const H2 = styled.h2`
    color: ${props => props.color};
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin: 10px;
    `
export const H3 = styled.h3`
    color: ${props => props.color};
    font-size: 1.8rem;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
    margin: 10px;
    `