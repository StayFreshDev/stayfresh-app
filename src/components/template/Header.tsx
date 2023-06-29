import {H1, A} from '../styles/atoms';
import {LeftNav, RightNav, NavBar} from '../styles/organisms';

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