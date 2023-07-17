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
  const [error, setError] = useState(''); 

  const validateInput = () => {
 
    if (!lastname || !firstname || !phone || !email || !password) {
      return false;
    }

    const re = /\S+@\S+\.\S+/; 
    if (!re.test(email)) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!validateInput()) {
      setError('Les informations fournies ne sont pas valides.');
      return;
    }

    try {
      const response = await fetch('http://stayfresh.dev-ord.fr:81/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname, lastname, phone, email, password })
      });

      console.log(response.headers);

      if (!response.ok) {
        const responseObject = await response.json();
        setError(`Erreur lors de l'inscription: ${responseObject.message}`);
        return;
      }

      console.log('Inscription réussie');
      navigate('/connexion');

    } catch (error) {
      setError(`Une erreur réseau est survenue: ${error}`);
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
                <Button customAttribute='' type="submit" color='#546A7B'>Inscription</Button>
                {error && <div style={{color: 'red'}}>{error}</div>}
            </Form>

        </ColoredContainer>


        <ColoredContainer color='#E5C09D'>
          <P_Hero color='white'>Votre rendez-vous bien-être, en un clic</P_Hero>
        </ColoredContainer>
    </Container>
      
    </>
  );
};

export default Inscription;
