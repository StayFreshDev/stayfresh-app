import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        `

export const ColoredContainer = styled.div`
    background-color: ${props => props.color};
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: 100%;
        padding-bottom: 20px;
    `
export const List = styled.div`
    padding-top: 40px;
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.color};
    `
  