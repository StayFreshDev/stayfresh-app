import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.color};
    `

export const EstablishmentSection = styled.section`
    width: 100%;
    margin-top: 2rem;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.color};
    border-radius: 4rem;
    `;

export const EstablishmentInfoDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    `;

export const ImageEstablishmentDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 2rem;
    `;

export const InfoEstablishment = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    `;

export const EstablishmentDivGlobal = styled.div`
    padding: 20px;`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    `;
