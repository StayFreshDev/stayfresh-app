
import { ColoredContainer, Container } from "./styles/molecules";
import { H1, P } from "./styles/atoms";
import { EstablishmentImg, AImage } from "./styles/atoms/Image";

interface ContainerProps {}

const EstablishmentsTypePage: React.FC<ContainerProps> = () => {
    return (
        <>
        <Container>
        <ColoredContainer color="#FFF">
            <AImage href="/establishment"> 
                <EstablishmentImg src="/img/salon_coiffure.jpg" alt="salon de coiffure"></EstablishmentImg>
                <P>Salon de coiffure</P>
            </AImage>
            <AImage href="/spa">
                <EstablishmentImg src="/img/salon_beaute.jpg" alt="salon de coiffure"></EstablishmentImg>
                <P>Spa</P>
            </AImage>
        </ColoredContainer>
       <ColoredContainer color="#E5C09D">
            <AImage href="/establishment"> 
                <EstablishmentImg src="/img/salon_tatouage.jpg" alt="salon de coiffure"></EstablishmentImg>
                <P>Salon de tatouage</P>
            </AImage>
            <AImage href="/spa">
                <EstablishmentImg src="/img/salon_estheticienne.jpg" alt="salon de coiffure"></EstablishmentImg>
                <P>Esthéticienne</P>
            </AImage>
        </ColoredContainer> 
        </Container>
       
        </>
    );
}

export default EstablishmentsTypePage;