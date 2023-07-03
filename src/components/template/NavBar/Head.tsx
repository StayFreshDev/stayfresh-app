import MobileNav from "./MobileNav";
import Nav from "./Nav";
import {H1} from '../../styles/atoms';
import {LeftNav, RightNav, NavBar} from '../../styles/organisms';



interface ContainerProps { }

const Head: React.FC<ContainerProps> = () => {
    return <>
    
        <NavBar>
            <LeftNav>
                <H1 color="#E5C09D">StayFresh</H1>
            </LeftNav>

            <RightNav>
                <Nav />
                <MobileNav />
            </RightNav>
        </NavBar>

    </>;
}

export default Head;


