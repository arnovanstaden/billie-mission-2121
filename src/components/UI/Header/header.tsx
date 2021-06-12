// Components
import Container from "../Library/Container/Container";

// Styles
import styles from "./header.module.scss"

const header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <h1>Billie</h1>
                    <h2>Mission 2121</h2>
                </div>
            </Container>
        </header>
    )
}

export default header
