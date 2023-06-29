import { Button } from "./styles/atoms/Button";
import { H3 } from "./styles/atoms/Title";
import { Container, ContainerLeft, ContainerRight } from "./styles/organisms/Containers";

interface ContainerProps { }

const Home: React.FC<ContainerProps> = () => {
    return (
        <>
        <Container>
            <ContainerLeft>
                <span>Que Recherchez-vous ?</span>
                <input type="text" placeholder="Rechercher un soin, un praticien, un établissement..." />
                <Button type="submit">Rechercher</Button>
            </ContainerLeft>
        <ContainerRight>
            <H3 color="white">Votre Rendez-vous bien-être, en un clic !</H3>
        </ContainerRight>
        </Container>
        
        </>
    );
}
export default Home;