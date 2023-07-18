import { P, P_Hero,  } from "./styles/atoms";
import { Button } from "./styles/atoms/Button";
import { ColoredContainer, Container, Form, Input } from "./styles/molecules";
import { useState, useEffect } from "react";
import { HomeSection, Section } from "./styles/molecules/Section";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import '../components/styles/styles.css' // Import Swiper styles
import { P_Home } from "./styles/atoms/Text";
import { useNavigate } from 'react-router-dom';

interface ContainerProps { }


const Home: React.FC<ContainerProps> = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const navigate = useNavigate();
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/establishments-list?term=${encodeURIComponent(searchValue)}`);
    };
    useEffect(() => {
        console.log(searchValue);
    }, [searchValue]);
  
    return (
        <>
        <Container>
            <ColoredContainer color="white">
                <P>Que Recherchez-vous ?</P>
                <Form onSubmit={handleSearchSubmit}>
                    <Input type="text" placeholder="Rechercher un soin, un praticien, un établissement..."
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                    <Button customAttribute="relative" color='#546A7B' type="submit">Rechercher</Button>
                </Form>
            </ColoredContainer>
            <ColoredContainer color="#e5c09d">
                <P_Hero color="white">Votre Rendez-vous bien-être, en un clic !</P_Hero>
            </ColoredContainer>
        </Container>
        
        <Section color="white">
        <Swiper
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
            clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="/img/salon_beaute.jpg" alt="random" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/salon_coiffure.jpg" alt="random" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/salon_estheticienne.jpg" alt="random" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/salon_tatouage.jpg" alt="random" />
        </SwiperSlide>
      </Swiper>
        </Section>
        <Section color="#e5c09d">
            <HomeSection>
                <img src="/img/salon_home.jpg" alt="logo" />
                <P_Home color="white">StayFresh est une plateforme de réservation de soins bien-être en ligne. Elle permet de mettre en relation les particuliers et les professionnels du bien-être.</P_Home>
            </HomeSection>
        </Section>
        <Section color="white">
            <HomeSection>
                <P_Home color="black">Il vous suffit de prendre rendez-vous avec votre compte et celui-ci sera directement pris en compte par le professionnel concerné</P_Home>
                <img src="/img/cuttin_hair.jpg" alt="logo" />
            </HomeSection>
        </Section>
    </>
    );
}
export default Home;