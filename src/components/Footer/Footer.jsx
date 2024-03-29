import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import Styles from "./Footer.module.scss";


export const Footer = () => {
   return (
    <footer>
        <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
        <div className={Styles.icons}>
        <FaSquareTwitter size={35}/>
        <FaFacebookSquare size={35} />
        </div>
        <div>
            <ul className={Styles.footerNav}>
                <li><Link to="/">Forside</Link></li>
                <li><Link to="/Destinationer/danmark">Hoteller & Destinationer</Link></li>
                <li><Link to="Værelser">Værelser</Link></li>
                <li><Link to="Resevation">Resevation</Link></li>
                <li><Link to="Login">Login</Link></li>
            </ul>
        </div>
    </footer>
   ) 
}