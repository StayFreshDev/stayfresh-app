import { ColoredContainer, Container, Form, Input, ColDiv, ColInput } from './styles/molecules';
import { Button, P_Hero, P } from './styles/atoms';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface ContainerProps { }

const Inscription: React.FC<ContainerProps> = () => {

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstname, lastname, phone, email, password })
    });

    if (response.ok) {
      console.log('Inscription réussie');
      // Rediriger l'utilisateur vers la page de connexion
      navigate('/connexion');
    } else {
      const responseObject = await response.json();
      console.log('Erreur lors de l\'inscription:', responseObject.message);
      // Gérer les erreurs
    }
  };
  return (
    <>
    <Container>
        <ColoredContainer color='#fff'>
            <P>Incrivez-vous pour rester frais !</P>
            <Form onSubmit={handleSubmit}>
                <ColDiv>
                  <ColInput type="text" name="nom" id="nom" placeholder='Nom' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                  <ColInput type="text" name="prenom" id="prenom" placeholder='Prénom' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </ColDiv>
                <Input type="text" name="telephone" id="telephone" placeholder='Téléphone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Input type="text" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" name="password" id="password" placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" color='#546A7B'>Inscription</Button>
            </Form>

        </ColoredContainer>


        <ColoredContainer color='#E5C09D'>
          <P_Hero>Votre rendez-vous bien-être, en un clic</P_Hero>
        </ColoredContainer>
    </Container>
      
    </>
  );
};

export default Inscription;