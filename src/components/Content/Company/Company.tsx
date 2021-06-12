import { ICompany, TView } from "../../../types/types";
import ClassNames from "classnames";

// Styles
import styles from "./company.module.scss";

interface IProps {
    company: ICompany,
    view: TView
}

const Company = ({ company, view }: IProps) => {
    const companyStyles = ClassNames(
        styles.company,
        view === "Grid" && styles.grid
    )

    return (
        <li className={companyStyles}>
            <div className={styles.intro}>
                <h4>{company.name}</h4>
                <small>{company.date_of_first_purchase}</small>
            </div>
            <div className={styles.content}>
                <p><span>Budget:</span> {company.budget}</p>
                <p><span>Budget Spent:</span> {company.budget_spent}</p>
            </div>
        </li>
    )
}

export default Company
