import styled from 'styled-components';
interface CustomComponentProps {
    customAttribute: string;
}

export const Button = styled.button<CustomComponentProps>`
    background-color: ${props=>props.color};
    border-radius: 10px;
    border: none;
    color: #fff; 
    border: 1px solid #fff;
    font-weight: bold;
    padding: 10px 60px 10px 60px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    
    &:hover {
        background-color: #fff;
        color: black;
        border: 1px solid black; 
        transition: 0.2s;
    }
    
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }

    `

export const ButtonBorder = styled.button`
    background-color: ${props=>props.color};
    border-radius: 10px;
    border: none;
    color: black;
    border: 1px solid black; 
    font-weight: bold;
    padding: 10px 60px 10px 60px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
    cursor: pointer;
    
    &:hover {
        background-color: #546A7B;
        border: 1px solid #fff;
        color: #fff;
        border: none;
        transition: 0.2s;
    }
    `

export const LogoutButton = styled.button`
    background-color: #A60606;
    border-radius: 10px;
    border: none;
    color: #fff; 
    font-weight: bold;
    padding: 10px 60px 10px 60px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    margin-top: 60px;
    cursor: pointer;
    margin-bottom: 40px;`

