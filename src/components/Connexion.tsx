import { ColoredContainer, Container, Form, Input } from './styles/molecules';
import { Button, P_Hero, P, Separateur, Line, ButtonBorder, A } from './styles/atoms';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContainerProps { }

const Connexion: React.FC<ContainerProps> = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      console.log('Connexion réussie');
      // Rediriger l'utilisateur vers la page d'accueil
      navigate('/');
    } else {
      const responseObject = await response.json();
      console.log('Erreur lors de la connexion:', responseObject.message);
      // Gérer les erreurs
    }

  };


  return (
    <>
    <Container>
        <ColoredContainer color='#fff'>
          <P>Vous êtes un déjà inscrit?</P>
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" name="password" id="password" placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button customAttribute='' type="submit" color='#546A7B'>Connexion</Button>
          </Form>
          <Separateur>
            <Line />
                <P>ou</P>
            <Line />
          </Separateur>
          <P>Vous êtes nouveau?</P>
          <A href="/inscription"><ButtonBorder color='#fff'>Inscription</ButtonBorder></A>
          
          <P>Vous êtes un établissement?</P>
          <A href='/page-entreprise'>
            <ButtonBorder color='#fff'>Cliquez ici</ButtonBorder>
          </A>
          
          
        </ColoredContainer>
        <ColoredContainer color='#E5C09D'>
          <P_Hero>Votre rendez-vous bien-être, en un clic</P_Hero>
        </ColoredContainer>
    </Container>
      
    </>
  );
};

export default Connexion;
