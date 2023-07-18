import { H1, H3, P } from "./styles/atoms";
import { AboutCard, AboutContainer, AboutText, AboutTextContent, CardImage, CardImg, CardText } from "./styles/molecules"

interface ContainerProps { }

const About: React.FC<ContainerProps> = () => {

    return (
        <>
        <AboutText>
            <H1>Qui sommes-nous ?</H1>
        </AboutText>
        <AboutContainer>
            <AboutCard>
                <CardImg>
                    <CardImage src="././src/assets/bryan.jpg"></CardImage>
                </CardImg>
                <CardText>
                    <H3>Bryan RAPARISON</H3>
                </CardText>
            </AboutCard>
            <AboutCard>
                <CardImg>
                    <CardImage src="././src/assets/antoine.jpg"></CardImage>
                </CardImg>
                <CardText>
                    <H3>Antoine GUERIN</H3>
                </CardText>
            </AboutCard>
            <AboutCard>
                <CardImg>
                    <CardImage src="././src/assets/Llyes.jpg"></CardImage>
                </CardImg>
                <CardText>
                    <H3>Lyes OURRED</H3>
                </CardText>
            </AboutCard>
        </AboutContainer>
        <AboutText>
            <AboutTextContent>
            <P>Nous sommes trois étudiants brillants en Bachelor 3 Informatique, chacuns apportant une expertise unique dans notre 
                domaine. Ensemble, nous avons décidé de créer StayFresh pour permettre au grand public de pouvoir accéder au monde de l'esthétique.
                 Cette application permet la prise de rendez-vous mais aussi la notation des professionnels pour permettre à l'utilisateur d'avoir un choix plus pertinent et
                ainsi pouvoir prendre son rendez-vous sans avoir de stress ou même le temps
                d’appeler le pratiquant.</P>
            </AboutTextContent>
        </AboutText>
        </>
    )
}

export default About;