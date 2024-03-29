import { Link } from "react-router-dom";
import { useState } from "react";
import Styles from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return(
        <>
            <div className={Styles.menuStyles} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? Styles.open : ""}>
                <li><Link to="/" onClick={handleToggle}>Forside</Link></li>
                <li><Link to="/Destinationer" onClick={handleToggle}>Hoteller & Destinationer</Link></li>
                <li><Link to="/Værelser" onClick={handleToggle}>Værelser</Link></li>
                <li><Link to="/Resevation" onClick={handleToggle}>Resevation</Link></li>
                <li><Link to="/Login" onClick={handleToggle}>Login</Link></li>
            </ul>
        </>
    )
}