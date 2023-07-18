import { useEffect, useState } from 'react';
import { ButtonDiv, EstablishmentDivGlobal, EstablishmentInfoDiv, EstablishmentSection, ImageEstablishmentDiv, InfoEstablishment } from './styles/molecules/Section';
import { Button, H2, P } from './styles/atoms';
import { useLocation } from 'react-router-dom';

interface Establishment {
  id: number;
  establishment_name: string;
  establishment_description: string;
  establishment_address: string;
}

function EtablissementsListe() {
  const [results, setResults] = useState<Establishment[]>([]);
  const location = useLocation();

  useEffect(() => {
    // Extrait la valeur de recherche de l'URL
    const params = new URLSearchParams(location.search);
    const searchValue = params.get('term');

    // Effectue la recherche / le filtrage
    fetch(`http://51.254.118.50/establishments`)
        .then(res => res.json())
        .then(data => {
            // Si un terme de recherche est présent, filtrez les résultats
            if (searchValue) {
                const filteredResults = data.filter((establishment: Establishment) =>
                    establishment.establishment_name.includes(searchValue));
                setResults(filteredResults);
            }
            // Sinon, affichez tous les établissements
            else {
                setResults(data);
            }
        })
        .catch(err => console.log(err));
}, [location]);

  return (
    <>
          <EstablishmentDivGlobal>
          {results.map(result => (
                <div key={result.id}>
                    <EstablishmentSection color="#F4F4F4">
                      <EstablishmentInfoDiv>
                        <ImageEstablishmentDiv>
                          {/* <img src={etablissement.image} alt={etablissement.name} /> */}
                        </ImageEstablishmentDiv>
                        <InfoEstablishment>
                          <H2>{result.establishment_name}</H2>
                          <P>{result.establishment_description}</P>
                          <P>{result.establishment_address}</P>
                        </InfoEstablishment>
                      </EstablishmentInfoDiv>
                      <ButtonDiv>
                        <Button customAttribute='' color="#546A7B">Prendre rendez-vous</Button>
                      </ButtonDiv>
                    </EstablishmentSection>
                </div>
            ))}
          </EstablishmentDivGlobal>      
    </>
    
  );
}

export default EtablissementsListe;
