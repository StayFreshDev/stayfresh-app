import {H1} from '../../atoms/Title';
import {A} from '../../atoms/Text';
import './Header.css';
import { NavBar } from '../../molecules/NavBar';

function Header() {
  return (
    <>
      <NavBar>
        <div className='leftNav'>
          <H1 color="#E5C09D" className='title'>StayFresh</H1>
        </div>
        <div className='rightNav'>
          <A href='#'>Mes rendez-vous</A>
          <A href='#'>Type d'établissement</A>
          <A href='#'>A propos</A>
          <A href='#'>Connexion</A>
        </div>
      </NavBar>
    </>
  );
};

export default Header;