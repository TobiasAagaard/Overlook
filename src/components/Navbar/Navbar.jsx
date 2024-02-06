import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.scss";
import Logo from "../../assets/SVG/hotel-overlook-logo.svg";

export const Navbar = () => {
    return (
        <nav className={Styles.navStyles}>
            <img src={Logo} alt="Logo for website" />
            <ul>
                <li><NavLink to="/">Forside</NavLink></li>
                <li><NavLink to="/Destination">Hoteller & Destinationer </NavLink></li>
                <li><NavLink to="Værelser">Værelser</NavLink></li>
                <li><NavLink to="Resevation">Resevation</NavLink></li>
                <li><NavLink to="Login">Login</NavLink></li>
            </ul>
        </nav>
    )
}