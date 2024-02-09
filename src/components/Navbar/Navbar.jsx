import { NavLink } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import Styles from "./Navbar.module.scss";
import Logo from "../../assets/SVG/hotel-overlook-logo.svg";

export const Navbar = () => {
    return (
        <>
        <nav className={Styles.navStyles}>
            <img src={Logo} alt="Logo for website" />
            <ul>
                <li><NavLink to="/"  style={({ isActive }) => ({color: isActive ? 'red' : '#fff'})}>Forside</NavLink></li>
                <li><NavLink to="/Destinationer"  style={({ isActive }) => ({color: isActive ? 'red' : '#fff'})}>Hoteller & Destinationer</NavLink></li>
                <li><NavLink to="Værelser"  style={({ isActive }) => ({color: isActive ? 'red' : '#fff'})}>Værelser</NavLink></li>
                <li><NavLink to="Resevation"  style={({ isActive }) => ({color: isActive ? 'red' : '#fff'})}>Resevation</NavLink></li>
                <li><NavLink to="Login"  style={({ isActive }) => ({color: isActive ? 'red' : '#fff'})}>Login</NavLink></li>
            </ul>
        </nav>
        <BurgerMenu />
        </>
    )
}