import { useEffect, useState } from 'react';
import { EstablishmentInfo } from './data/establishment';
import { EstablishmentSection, Section } from './styles/molecules/Section';
import { H1, P } from './styles/atoms';

function EtablissementsListe() {
  const [etablissements, setEtablissements] = useState<EstablishmentInfo[]>([]);

  useEffect(() => {
    // Effectuer la requête API pour récupérer les établissements
    // Assurez-vous d'utiliser l'URL et les paramètres appropriés pour filtrer par type d'établissement (ex : salons de coiffure)

    // Exemple d'appel à l'API avec fetch :
    fetch('http://localhost:8080/establishments/')
      .then(response => response.json())
      .then(data => setEtablissements(data));
  }, []);

  return (
    <>
            {etablissements.map((etablissement, index) => {
                return (
                    <EstablishmentSection color="#FFF">
                        <H1>{etablissement.name}</H1>
                        <P>{etablissement.description}</P>
                        
                    </EstablishmentSection>
                )
                }
            )
            }
    </>
    
  );
}

export default EtablissementsListe;
