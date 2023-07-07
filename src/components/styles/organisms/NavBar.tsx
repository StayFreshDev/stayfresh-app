import styled from "styled-components";

export const NavBar = styled.nav` 
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    position: sticky;
    z-index: 5;
    user-select: none;
    top: 0;
    background-color: white;
    `    
export const LeftNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5%;
    cursor: pointer;
    z-index: 2;
    height: 100%;
    `

export const RightNav = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 5%;

    @media screen and (max-width: 768px) {
        opacity: 1;
    }
    `

export const NavList = styled.nav`
    @media screen and (max-width: 768px) {
        display: none;
    }
    `

export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 20 0px;
    padding: 0 25px;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 65px;
        right: 0;
        width: 100%;
        height: 30vh;
        background: #E5C09D;
        padding: 0px;
        transition: all 0.5s ease;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    }
`

export const Li = styled.li`
    list-style: none;
    padding-right: 30px;

    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`
export const MobilNav = styled.nav`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
    }
`


