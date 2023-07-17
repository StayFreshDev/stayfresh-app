import { useEffect, useState } from 'react';
import { EstablishmentInfo } from './data/establishment';
import { ButtonDiv, EstablishmentDivGlobal, EstablishmentInfoDiv, EstablishmentSection, ImageEstablishmentDiv, InfoEstablishment } from './styles/molecules/Section';
import { Button, H1, H2, P } from './styles/atoms';

function EtablissementsListe() {
  const [etablissements, setEtablissements] = useState<EstablishmentInfo[]>([]);

  useEffect(() => {
    fetch('http://51.254.118.50/establishments/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setEtablissements(data);
      })
  }, []);

  const salonType = "Coiffure";

  return (
    <>
          <EstablishmentDivGlobal>
          <H1>Salon de {salonType} :</H1>
            {etablissements.map((etablissement, index) => {
              {console.log(etablissement.establishment_address);}
                return (
                  <>
                    <EstablishmentSection key={index} color="#F4F4F4">
                      <EstablishmentInfoDiv>
                        <ImageEstablishmentDiv>
                          {/* <img src={etablissement.image} alt={etablissement.name} /> */}
                        </ImageEstablishmentDiv>
                        <InfoEstablishment>
                          <H2>{etablissement.establishment_name}</H2>
                          <P>{etablissement.establishment_description}</P>
                          <P>{etablissement.establishment_address}</P>
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
