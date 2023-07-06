import {H1, A} from '../styles/atoms';
import {LeftNav, RightNav, NavBar} from '../styles/organisms';

function Header() {
  return (
    <>
      <NavBar>
        <LeftNav>
          <A href='/'><H1 color="#E5C09D" className='title'>StayFresh</H1></A>
        </LeftNav>
        <RightNav>
          <A href='#'>Mes rendez-vous</A>
          <A href='/establishment'>Type d'établissement</A>
          <A href='/connexion'>Connexion</A>
        </RightNav>
      </NavBar>
    </>
  );
};

export default Header;