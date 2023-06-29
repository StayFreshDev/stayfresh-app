import {H1} from '../atoms/Title';
import {A} from '../atoms/Text';
import {LeftNav, RightNav} from '../molecules/NavBar';
import { NavBar } from '../molecules/NavBar';

function Header() {
  return (
    <>
      <NavBar>
        <LeftNav>
          <H1 color="#E5C09D" className='title'>StayFresh</H1>
        </LeftNav>
        <RightNav>
          <A href='#'>Mes rendez-vous</A>
          <A href='#'>Type d'établissement</A>
          <A href='#'>Connexion</A>
        </RightNav>
      </NavBar>
    </>
  );
};

export default Header;