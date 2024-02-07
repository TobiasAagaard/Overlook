import Styles from "./Header.module.scss"

export const Header = (props) => {
    return (
        <header>
            <div className={Styles.blackbg}>
                <h1>{props.header}</h1>
            </div>
            <div className={Styles.redbg}></div>
        </header>
    )
}