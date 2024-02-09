import { useLocation } from "react-router-dom";
import Styles from "./Breadcrumb.module.scss"
import { Style } from "@mui/icons-material";

export const Breadcrumbs = () => {
    const location = useLocation()

    let currentLink = ''

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        
        
        return(
            <div className={Styles.crumb} key={crumb}>
                {crumb}
            </div>
        )
    })
    return (
        <div className={Style.crumbsStyle}>
            {crumbs}
        </div>
    )
}