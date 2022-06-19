import NavLinks from "../NavLinks";
import {IoMdMenu} from 'react-icons/io';
import {IoMdClose} from 'react-icons/io';
import {useState} from "react";

const MobileNavigation = ({cartQuantity}) => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <IoMdMenu className="hamburger" size="40px" onClick={() => setOpen(!open)}/>
    const closeIcon = <IoMdClose className="hamburger" size="40px" onClick={() => setOpen(!open)}/>

    return (
        <nav className="mobile-navigation">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks cartQuantity={cartQuantity} />}
        </nav>
    );
}

export default MobileNavigation;
