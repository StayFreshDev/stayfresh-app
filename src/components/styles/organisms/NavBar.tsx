import styled from "styled-components";

export const NavBar = styled.nav` 
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    position: sticky;
    `    
export const LeftNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5%;
    `

export const RightNav = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 5%;`

