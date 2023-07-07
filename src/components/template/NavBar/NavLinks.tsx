import { Li, Ul } from "../../styles/organisms";
import { A } from "../../styles/atoms";

const NavLinks = (props: { isMobile: any; closeMobileMenu: () => any; }) => {

    return (
        <Ul>
            <Li onClick={() => props.isMobile && props.closeMobileMenu()}><A href="/connexion">Connexion</A></Li>
            <Li onClick={() => props.isMobile && props.closeMobileMenu()}><A href="/connexion">Mes rendez-vous</A></Li>
            <Li onClick={() => props.isMobile && props.closeMobileMenu()}><A href="/listing-entreprise">Type d'établissement</A></Li>
        </Ul>
    );
};
export default NavLinks;
