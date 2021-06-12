import { useContext, useState } from "react";
import { TView } from "../../../@types/types";
import ClassNames from "classnames";

// Context
import { DataContext } from "../../../context/DataContext";

// Components
import Container from "../../UI/Library/Container/Container";
import Company from "../../Content/Company/Company";

// Styles
import styles from "./dashboard.module.scss"

const Dashboard = () => {
    // Config

    // Context
    const { companies } = useContext(DataContext);

    // State
    const [view, setView] = useState<TView>("Row");

    // Styles
    const listStyles = ClassNames(
        styles.list,
        view === "Grid" && styles.grid
    )

    return (
        <main className={styles.dashboard}>
            <Container>
                <div className={styles.header}>
                    <h3>Martian Clients</h3>
                    <div className={styles.view}>
                        <i
                            className={`icon-menu ${view === "Row" && styles.active}`}
                            data-tip="Row View"
                            onClick={() => setView("Row")}
                        />
                        <i
                            className={`icon-grid_view ${view === "Grid" && styles.active}`}
                            data-tip="Grid View"
                            onClick={() => setView("Grid")}
                        />
                    </div>
                </div>

                <ul className={listStyles}>
                    {companies.map(company => (
                        <Company company={company} view={view} key={company.id} />
                    ))}
                </ul>
            </Container>
        </main>
    )
}

export default Dashboard
