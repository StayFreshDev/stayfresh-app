import { A } from '../../styles/atoms';
import {NavList, Ul, Li} from '../../styles/organisms';
import { useEffect, useState } from 'react';

const Nav = () => {
    const [user, setUser] = useState<{firstname: string, lastname: string} | null>(null);

  useEffect(() => {
    const allCookies = document.cookie.split('; ');
    const tokenCookie = allCookies.find(cookie => cookie.startsWith('token'));

    if (tokenCookie) {
      const token = tokenCookie.split('=')[1];
      fetch(`http://stayfresh.dev-ord.fr:81/users/currentUser`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Erreur HTTP: " + response.status);
          }
          return response.json();
        })
        .then(data => {
            setUser({firstname: data.firstname, lastname: data.lastname});
        })
        .catch(function(error) {
          console.log("Erreur lors de la requête fetch.", error);
        });
    }
  }, []);
    return (
        <NavList>
            <Ul>
                {user  ? 
                    <Li><A href='/user'>Mes rendez-vous</A></Li> : 
                    <Li></Li>
                }
                <Li><A href='/establishments-list'>Type d'établissement</A></Li>
                <Li><A href='/about'>Qui sommes-nous ?</A></Li>
                {user  ? 
                    <Li><A href='/user'>{`${user.firstname} ${user.lastname}`}</A></Li> : 
                    <Li><A href='/connexion'>Connexion</A></Li>
                }
            </Ul>
        </NavList>
    );
}

export default Nav;