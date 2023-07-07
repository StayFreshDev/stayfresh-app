import { A } from '../../styles/atoms';
import {NavList, Ul, Li} from '../../styles/organisms';

const Nav = () => {
    return (
        <NavList>
            <Ul>
                <Li><A href='/connexion'>Mes rendez-vous</A></Li>
                <Li><A href='/establishments-list'>Type d'établissement</A></Li>
                <Li><A href='/about'>Qui sommes-nous ?</A></Li>
                <Li><A href='/connexion'>Connexion</A></Li>
            </Ul>
        </NavList>
    );
}

export default Nav;