import { ColoredContainer, Container, Form, Input } from './styles/molecules';
import { Button, P_Hero, P, Separateur, Line, ButtonBorder } from './styles/atoms';
interface ContainerProps { }

const Connexion: React.FC<ContainerProps> = () => {
  return (
    <>
    <Container>
        <ColoredContainer color='#fff'>
          <P>Vous êtes un déjà inscrit?</P>
          <Form action="">
            <Input type="text" name="email" id="email" placeholder='Email'></Input>
            <Input type="password" name="password" id="password" placeholder='Mot de passe'></Input>
            <Button color='#546A7B'>Connexion</Button>
          </Form>
          <Separateur>
            <Line />
                <P>ou</P>
            <Line />
          </Separateur>
          <P>Vous êtes nouveau?</P>
          <ButtonBorder color='#fff'>Inscription</ButtonBorder>
          <P>Vous êtes un établissement?</P>
          <ButtonBorder color='#fff'>Cliquez ici</ButtonBorder>
          
        </ColoredContainer>
        <ColoredContainer color='#E5C09D'>
          <P_Hero>Votre rendez-vous bien-être, en un clic</P_Hero>
        </ColoredContainer>
    </Container>
      
    </>
  );
};

export default Connexion;
