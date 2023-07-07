import { Li, Ul } from "../../styles/organisms";
import { A } from "../../styles/atoms";

const NavLinks = (props: { isMobile: any; closeMobileMenu: () => any; }) => {

    return (
        <Ul>
            <Li onClick={() => props.isMobile && props.closeMobileMenu()}><A href="/connexion">Connexion</A></Li>
            <Li onClick={() => props.isMobile && props.closeMobileMenu()}><A href="/connexion">Mes rendez-vous</A></Li>
            <Li onClick={() => props.isMobile && props.closeMobileMenu()}><A href="/establishments-list">Type d'établissement</A></Li>
            <Li onClick={() => props.isMobile && props.closeMobileMenu()}><A href="/about">Qui sommes-nous ?</A></Li>
        </Ul>
    );
};
export default NavLinks;
