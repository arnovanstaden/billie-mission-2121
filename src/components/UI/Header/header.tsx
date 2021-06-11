// Components
import Container from "../Library/Container/Container";

// Styles
import styles from "./header.module.scss"

const header = () => {
    return (
        <div className={styles.header}>
            <h1>Billie</h1>
            <h2>Mission 2121</h2>
        </div>
    )
}

export default header
