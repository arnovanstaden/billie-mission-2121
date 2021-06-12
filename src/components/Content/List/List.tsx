import { useContext } from "react";
import { TView } from "../../../@types/types";
import ClassNames from "classnames";

// Context
import { DataContext } from "../../../context/DataContext";

// Components
import Company from "../Company/Company";

// Styles
import styles from "./list.module.scss";

const List = ({ view }: { view: TView }) => {

    // Context
    const { companies } = useContext(DataContext);

    // Styles
    const listStyles = ClassNames(
        styles.list,
        view === "Grid" && styles.grid
    )
    return (
        <ul className={listStyles}>
            {companies.map(company => (
                <Company company={company} view={view} key={company.id} />
            ))}
        </ul>
    )
}

export default List
