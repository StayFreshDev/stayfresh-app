import { useEffect, useState } from 'react';
import { EstablishmentInfo } from './data/establishment';
import { ButtonDiv, EstablishmentDivGlobal, EstablishmentInfoDiv, EstablishmentSection, ImageEstablishmentDiv, InfoEstablishment } from './styles/molecules/Section';
import { Button, H1, P } from './styles/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function EtablissementsListe() {
  const [etablissements, setEtablissements] = useState<EstablishmentInfo[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/establishments/')
      .then(response => response.json())
      .then(data => setEtablissements(data));
  }, []);

  const salonType = "Coiffure";

  return (
    <>
    <H1>Salon de {salonType} :</H1>
          <EstablishmentDivGlobal>
            {etablissements.map((etablissement, index) => {
                return (
                  <>
                    <EstablishmentSection key={index} color="#F4F4F4">
                      <EstablishmentInfoDiv>
                        <ImageEstablishmentDiv>
                          <img src={etablissement.image} alt={etablissement.name} />
                        </ImageEstablishmentDiv>
                        <InfoEstablishment>
                          <H1>{etablissement.name}</H1>
                          <P>{etablissement.adress_description}</P>
                          <P>{etablissement.city}</P>
                          <P>{etablissement.description}</P>
                        </InfoEstablishment>
                      </EstablishmentInfoDiv>
                      <ButtonDiv>
                        <Button customAttribute='' color="#546A7B">Prendre rendez-vous</Button>
                      </ButtonDiv>
                    </EstablishmentSection>
                  </>
                  )
                }
              )
            }
          </EstablishmentDivGlobal>
            
            
    </>
    
  );
}

export default EtablissementsListe;
