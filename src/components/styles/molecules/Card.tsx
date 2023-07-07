import styled from "styled-components";

export const Card = styled.div`
    width: 80%;
    height: 150px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    `
export const Left = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: left;
    border-radius: 40px;
    `
export const Right = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
    `
export const Text = styled.p`
    color: black;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }`