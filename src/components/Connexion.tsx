import { ColoredContainer, Container, Form, Input } from './styles/molecules';
import { Button, P_Hero, P, Separateur, Line, ButtonBorder, A } from './styles/atoms';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ContainerProps { }

const Connexion: React.FC<ContainerProps> = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(''); 

  
  const validateInput = () => {

    if (!email || !password) {
      return false;
    }

    const re = /\S+@\S+\.\S+/; 
    if (!re.test(email)) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateInput()) {
      setError('Les informations fournies ne sont pas valides.');
      return;
    }

    try {
      const response = await fetch('http://51.254.118.50/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const responseObject = await response.json();
        if (response.status === 401) {
          setError('Mot de passe incorrect. Veuillez réessayer.');
        } else {
          setError(`Erreur lors de la connexion: ${responseObject.message}`);
        }
        return;
      }

      const data = await response.json();
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 1);
      const expiryDateString = expiryDate.toUTCString();

      // Store the token in a cookie
      document.cookie = `token=${data.token}; expires=${expiryDateString}; path=/;`;

      console.log('Connexion réussie');
      console.log(document.cookie);
      navigate('/user');
      window.location.reload();

    } catch (error) {
      setError(`Une erreur réseau est survenue: ${error}`);
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
            {error && <div style={{color: 'red'}}>{error}</div>}
          </Form>
          <Separateur>
            <Line />
                <P>ou</P>
            <Line />
          </Separateur>
          <P>Vous êtes nouveau?</P>
          <A href="/inscription"><ButtonBorder color='#fff'>Inscription</ButtonBorder></A>
          <P>Vous êtes un établissement?</P>
          <A href="/page-entreprise"><ButtonBorder color='#fff'>Cliquez ici</ButtonBorder></A>
          
        </ColoredContainer>
        <ColoredContainer color='#E5C09D'>
          <P_Hero color='white'>Votre rendez-vous bien-être, en un clic</P_Hero>
        </ColoredContainer>
    </Container>
      
    </>
  );
};

export default Connexion;