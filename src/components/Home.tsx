import { P, P_Hero,  } from "./styles/atoms";
import { Button } from "./styles/atoms/Button";
import { ColoredContainer, Container, Input } from "./styles/molecules";
import { useState, useEffect } from "react";
import { HomeSection, Section } from "./styles/molecules/Section";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import '../components/styles/styles.css' // Import Swiper styles
import { A, P_Home } from "./styles/atoms/Text";

interface ContainerProps { }


const Home: React.FC<ContainerProps> = () => {
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);

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
                <A href="/establishments-list"><Button customAttribute="relative" color='#546A7B' type="submit">Rechercher</Button></A>
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