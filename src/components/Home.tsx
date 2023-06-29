import { P_Hero } from "./styles/atoms";
import { Button } from "./styles/atoms/Button";
import { ColoredContainer, Container } from "./styles/molecules";

interface ContainerProps { }

const Home: React.FC<ContainerProps> = () => {
    return (
        <>
        <Container>
            <ColoredContainer color="white">
                <span>Que Recherchez-vous ?</span>
                <input type="text" placeholder="Rechercher un soin, un praticien, un établissement..." />
                <Button type="submit">Rechercher</Button>
            </ColoredContainer>
        <ColoredContainer color="#e5c09d">
            <P_Hero color="white">Votre Rendez-vous bien-être, en un clic !</P_Hero>
        </ColoredContainer>
        </Container>
        
        </>
    );
}
export default Home;