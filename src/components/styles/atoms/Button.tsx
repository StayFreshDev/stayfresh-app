import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props=>props.color};
    border-radius: 10px;
    border: none;
    color: #fff; 
    font-weight: bold;
    padding: 10px 60px 10px 60px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;`

    export const ButtonBorder = styled.button`
    background-color: ${props=>props.color};
    border-radius: 10px;
    border: none;
    color: black;
    border: 2px solid black; 
    font-weight: bold;
    padding: 10px 60px 10px 60px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;`

