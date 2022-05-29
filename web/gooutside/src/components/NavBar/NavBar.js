import react from 'react';
import "./NavBar.css";
import HamburgerIcon from "../../assets/icons/Hamburger_icon.png";
import PersonIcon from "../../assets/icons/Person_icon.png";

const NavBar = () => {

    return (
        <div id= 'NavBarContainer'>
            <img className = "HamburgerIcon" src={HamburgerIcon}/>

            <img className = "PersonIcon" src={PersonIcon}/>

        </div>
    )
}

export default NavBar;