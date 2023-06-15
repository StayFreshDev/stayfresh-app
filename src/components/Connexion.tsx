import { Button } from './styles/atoms/Button';
import { P_Hero } from './styles/atoms/Text';
import './styles/organisms/Connexion.css';

interface ContainerProps { }

const Connexion: React.FC<ContainerProps> = () => {
  return (
    <>
    <div className="container">
        <div className="containerLeft">
          <Button color='#546A7B'>Connexion</Button>
        </div>
        <div className="containerRight">
          <P_Hero>Votre rendez-vous bien-être, en un clic</P_Hero>
        </div>
    </div>
      
    </>
  );
};

export default Connexion;
