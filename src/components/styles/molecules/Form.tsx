import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    `
export const Input = styled.input`
    width: 420px;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #F9F9F9;
    `
export const ColInput = styled.input`
    width:  ${props => props.width};
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #F9F9F9;
    `
export const ColDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    `

export const Select = styled.select`
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #F9F9F9;
    `