import NavLinks from "./NavLinks";
import {CgMenuRound} from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";
import { MobilNav } from "../../styles/organisms";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound className="hamburger" 
                            size='40px' 
                            color='black'
                            onClick={() => setIsOpen(!isOpen)}/>

    const closeIcon = <CgCloseO className="hamburger"
                            size='40px' 
                            color='black'
                            onClick={() => setIsOpen(!isOpen)}/>

    const closeMobileMenu = () => setIsOpen(false);

    return (
        <MobilNav>
            {isOpen ? closeIcon : hamburgerIcon}
            {isOpen && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </MobilNav>
    );
}

export default MobileNav;