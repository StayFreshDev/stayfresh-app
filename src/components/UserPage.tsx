import React, { useEffect, useState } from 'react';
import { Card, Image, Input, Left, Right, UserForm, List, ContainerLong } from './styles/molecules';
import { Espaceur, Label, LogoutButton, P } from './styles/atoms';
import { H2, H3 } from './styles/atoms/Title';
import { useNavigate } from 'react-router-dom';

interface User {
    id: number;
    firstname: string;
    lastname: string;
    mail: string;
    phone: number;
  }
  

const UserPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const handleLogout = () => {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      navigate('/connexion');
      window.location.reload();
    };
    
  
    useEffect(() => {
      const allCookies = document.cookie.split('; ');
      const tokenCookie = allCookies.find(cookie => cookie.startsWith('token'));

      let token;
      if (tokenCookie) {
        token = tokenCookie.split('=')[1];
      }

      if (!token) {
        console.log("Aucun token trouvé. L'utilisateur n'est pas connecté.");
        return;
      }

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
          setUser(data);
        })
        .catch(function(error) {
          console.log("Erreur lors de la requête fetch.", error);
        });
    }, []);

  return (
    <>
      <ContainerLong>
        <List color="#fff">
          <H2>Mon compte</H2>
          {user ? (
            <UserForm>
              <Label htmlFor="nom">Nom:</Label>
              <Input type="text" name="nom" id="nom" placeholder="Nom" value={user.lastname}/>
              <Label htmlFor="nom">Prénom:</Label>
              <Input type="text" name="prenom" id="prenom" placeholder="Prénom" value={user.firstname} />
              <Espaceur />
              <Label htmlFor="nom">Numéro de téléphone:</Label>
              <Input type="text" name="telephone" id="telephone" placeholder="Téléphone" value={user.phone}/>
              <Label htmlFor="nom">Adresse mail:</Label>
              <Input type="text" name="email" id="email" placeholder="Email" value={user.mail}  />
            </UserForm>
          ) : (
            <div>Chargement...</div>
          )}
          <LogoutButton onClick={handleLogout}>Déconnexion</LogoutButton>
        </List>

       
        <List color='#E5C09D'>
          <H2>Mes rendez-vous</H2>
          <Card>
            <Left>
              <Image src="../src/assets/ryanhair.jpg" alt="Photo de profil" />
            </Left>
            <Right>
              <H3>Ryan Hair</H3>
              <P>1 rue Garibaldi, 69007 Lyon</P>
              <P>3,5/5</P>
              <P>14h - 14h30</P>
            </Right>
          </Card>
          <Card>
            <Left>
              <Image src="../src/assets/ryanhair.jpg" alt="Photo de profil" />
            </Left>
            <Right>
              <H3>Ryan Hair</H3>
              <P>1 rue Garibaldi, 69007 Lyon</P>
              <P>3,5/5</P>
              <P>14h - 14h30</P>
            </Right>
          </Card>
          <Card>
            <Left>
              <Image src="../src/assets/ryanhair.jpg" alt="Photo de profil" />
            </Left>
            <Right>
              <H3>Ryan Hair</H3>
              <P>1 rue Garibaldi, 69007 Lyon</P>
              <P>3,5/5</P>
              <P>14h - 14h30</P>
            </Right>
          </Card>
          <Card>
            <Left>
              <Image src="../src/assets/ryanhair.jpg" alt="Photo de profil" />
            </Left>
            <Right>
              <H3>Ryan Hair</H3>
              <P>1 rue Garibaldi, 69007 Lyon</P>
              <P>3,5/5</P>
              <P>14h - 14h30</P>
            </Right>
          </Card>
        </List>
      </ContainerLong>
    </>
  );
};

export default UserPage;
