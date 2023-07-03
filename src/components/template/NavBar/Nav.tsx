import { A } from '../../styles/atoms';
import {NavList, Ul, Li} from '../../styles/organisms';

const Nav = () => {
    return (
        <NavList>
            <Ul>
                <Li><A href="#">Mes rendez-vous</A></Li>
                <Li><A href="#">Type d'établissement</A></Li>
                <Li><A href="#">Connexion</A></Li>  
            </Ul>
        </NavList>
    );
}

export default Nav;