import styled from 'styled-components';
interface CustomComponentProps {
    customAttribute: string;
}

export const Button = styled.button<CustomComponentProps>`
    background-color: ${props=>props.color};
    position: ${customAttribute=>customAttribute.customAttribute ==  'absolute' ? 'absolute' : 'relative'};
    border-radius: 10px;
    border: none;
    color: #fff; 
    font-weight: bold;
    padding: 10px 60px 10px 60px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    bottom: ${customAttribute=>customAttribute.customAttribute ==  'absolute' ? '0' : ''};
    right: ${customAttribute=>customAttribute.customAttribute ==  'absolute' ? '50%' : ''};
    transform: ${customAttribute=>customAttribute.customAttribute ==  'absolute' ? 'translate(50%, 0)' : ''};`

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

export const ArrowButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    `

