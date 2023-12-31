import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.color};
    `

export const EstablishmentSection = styled.section`
    width: 100%;
    margin-top: 2rem;
    height: 30vh;
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
    width: 50%;
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
    padding: 40px;`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    `;

export const HomeSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    img {
        width: 40%;
        height: 60%;
        object-fit: cover;
        border-radius: 4rem;
    }
    `;
