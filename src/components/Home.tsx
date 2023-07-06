import { P, P_Hero } from "./styles/atoms";
import { Button } from "./styles/atoms/Button";
import { ColoredContainer, Container, Input } from "./styles/molecules";
import { useState, useEffect } from "react";
import { HomeContainer } from "./styles/molecules/Containers";
import { P_Home } from "./styles/atoms/Text";
import { Section } from "./styles/molecules/Section";
import { UlHome } from "./styles/atoms/List";
import { LiHome } from "./styles/atoms/List";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ImageHome } from "./styles/atoms/Image";

interface ContainerProps { }


const Home: React.FC<ContainerProps> = () => {
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);
    const handleScroll = () => {
        window.scrollTo(0, 1500);
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        if (search.length > 0) {
            fetch(`https://jsonplaceholder.typicode.com/users`)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    setResults(res.response.venues);
                })
        }
    }
    , [search]);

    return (
        <>
        <Container>
            <ColoredContainer color="white">
                <P>Que Recherchez-vous ?</P>
                <Input type="text" placeholder="Rechercher un soin, un praticien, un établissement..."
                    value={search}
                    onChange={handleSearch} 
                />
                <Button customAttribute="relative" color='#546A7B' type="submit">Rechercher</Button>
            </ColoredContainer>
        <ColoredContainer color="#e5c09d">
            <P_Hero color="white">Votre Rendez-vous bien-être, en un clic !</P_Hero>
        </ColoredContainer>
        {results.map((result, index) => {
            return (
                <div key={index}>
                    <p>{result.name}</p>
                </div>
            )
            })
        }
        </Container>
        <Button customAttribute="absolute" color="#546A7B" className="scrollButton" onClick={() => handleScroll()}>
            <FontAwesomeIcon icon={faArrowDown} size="2x" />
        </Button>
        
        <Section>
            <ColoredContainer color="white">
                <HomeContainer>
                    <P_Home>StayFresh c'est quoi ?</P_Home>
                    <P>StayFresh est une plateforme de réservation de soins bien-être en ligne. Elle permet aux utilisateurs de trouver facilement un soin, un praticien ou un établissement, de réserver et de payer en ligne. Elle permet également aux praticiens et établissements de gérer leurs réservations et leurs clients.</P>
                </HomeContainer>
            </ColoredContainer>
            <ColoredContainer color="#e5c09d">
                <HomeContainer>
                    <ImageHome src="/img/salon_beaute.jpg" alt="img" />
                </HomeContainer>
            </ColoredContainer>
        </Section>
        <Section>
            <ColoredContainer color="#e5c09d">
                <HomeContainer>
                    <ImageHome src="/img/salon_coiffure.jpg" alt="img" />
                </HomeContainer>
            </ColoredContainer>
            <ColoredContainer color="white">
                <HomeContainer>
                    <P_Home>Comment ça marche ? </P_Home>
                        <UlHome>
                            <LiHome>1. Recherchez un soin, un praticien ou un établissement</LiHome>
                            <LiHome>2. Réservez votre soin en ligne</LiHome>
                            <LiHome>3. Payez en ligne</LiHome>
                            <LiHome>4. Profitez de votre soin</LiHome>
                        </UlHome>
                    
                </HomeContainer>
            </ColoredContainer>
        </Section>
    </>
    );
}
export default Home;