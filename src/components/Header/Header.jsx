import Styles from "./Header.module.scss"

export const Header = (props) => {
    return (
        <div className={Styles.container}>
        <header>
            <div className={Styles.blackbg}>
                <h1>{props.header}</h1>
            </div>
            <div className={Styles.redbg}></div>
        </header>
        </div>
    )
}