import { Button } from './styles/atoms/Button';
import { P_Hero } from './styles/atoms/Text';
import { Container, ContainerLeft, ContainerRight } from './styles/organisms/Containers';

interface ContainerProps { }

const Connexion: React.FC<ContainerProps> = () => {
  return (
    <>
    <Container>
        <ContainerLeft>
          <Button color='#546A7B'>Connexion</Button>
        </ContainerLeft>
        <ContainerRight>
          <P_Hero>Votre rendez-vous bien-être, en un clic</P_Hero>
        </ContainerRight>
    </Container>
      
    </>
  );
};

export default Connexion;
