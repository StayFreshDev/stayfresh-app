import { ColoredContainer, Select, Container, Form, Input, ColDiv, ColInput } from './styles/molecules';
import { Button, P } from './styles/atoms';
interface ContainerProps { }

const PageEntreprise: React.FC<ContainerProps> = () => {
  return (
    <>
    <Container>
        <ColoredContainer color='#fff'>
        <P>Connectez vous à votre compte entreprise</P>
          <Form action="">
            <Input type="text" name="email" id="email" placeholder='Email'></Input>
            <Input type="password" name="password" id="password" placeholder='Mot de passe'></Input>
            <Button customAttribute='' color='#546A7B'>Connexion</Button>
          </Form>
        </ColoredContainer>

        <ColoredContainer color='#E5C09D'>
            <P>Incrivez votre entreprise </P>
            <Form action="">
                <ColDiv>
                    <ColInput type="text" name="nom" id="nom" placeholder="Nom de l'établissement"></ColInput>
                    <ColInput type="text" name="email" id="email" placeholder='Email'></ColInput>
                </ColDiv>
                <ColDiv>
                    <ColInput type="text" name="telephone" id="telephone" placeholder='Téléphone'></ColInput>
                    <ColInput type="text" name="siret" id="siret" placeholder='N° Siret'></ColInput>
                </ColDiv>
                <Input type="text" name="password" id="password" placeholder='Mot de passe'></Input>
                <ColDiv>
                    <ColInput type="text" name="num_rue" id="num_rue" placeholder='N° de rue' width="80px"></ColInput>
                    <ColInput type="text" name="nom_rue" id="nom_rue" placeholder='Nom de rue'></ColInput>
                </ColDiv>
                <ColDiv>
                    <ColInput type="text" name="code_postal" id="code_postal" placeholder='Code postal' width="100px"></ColInput>
                    <ColInput type="text" name="ville" id="ville" placeholder='Ville' width="100px"></ColInput>
                </ColDiv>
                <Select>
                  <option value="" disabled selected>Type d'établissement</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </Select>
                <Button customAttribute='' color='#546A7B'>Inscription</Button>
            </Form>
        </ColoredContainer>
    </Container>
      
    </>
  );
};

export default PageEntreprise;
