import { useLocation } from "react-router-dom";


export const Breadcrumbs = () => {
    const location = useLocation()


    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        return(
            <div>
                {crumb}
            </div>
        )
    })
    return (
        <div>
            {crumbs}
        </div>
    )
}