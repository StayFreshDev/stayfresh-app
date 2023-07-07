import MobileNav from "./MobileNav";
import Nav from "./Nav";
import {A, H1} from '../../styles/atoms';
import {LeftNav, RightNav, NavBar} from '../../styles/organisms';



interface ContainerProps { }

const Head: React.FC<ContainerProps> = () => {
    return <>
        <NavBar>
            <LeftNav>
                <A href="/"><H1 color="#E5C09D">StayFresh</H1></A>
            </LeftNav>

            <RightNav>
                <Nav />
                <MobileNav />
            </RightNav>
        </NavBar>

    </>;
}

export default Head;


