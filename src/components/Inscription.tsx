import { ColoredContainer, Container, Form, Input, ColDiv, ColInput } from './styles/molecules';
import { Button, P_Hero, P } from './styles/atoms';
interface ContainerProps { }

const Inscription: React.FC<ContainerProps> = () => {
  return (
    <>
    <Container>
        <ColoredContainer color='#fff'>
            <P>Incrivez-vous pour rester frais !</P>
            <Form action="">
                <ColDiv>
                    <ColInput type="text" name="nom" id="nom" placeholder='Nom'></ColInput>
                    <ColInput type="text" name="prenom" id="prenom" placeholder='Prénom'></ColInput>
                </ColDiv>
                <Input type="text" name="telephone" id="telephone" placeholder='Téléphone'></Input>
                <Input type="text" name="email" id="email" placeholder='Email'></Input>
                <Input type="password" name="password" id="password" placeholder='Mot de passe'></Input>
                <Button color='#546A7B'>Inscription</Button>
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
