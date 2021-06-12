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
                <div className={styles.item}>
                    <span>Budget:</span>
                    <i data-tip="Mars Coin" className="icon-mars_coin"></i>
                    <p>{company.budget}</p>
                </div>
                <div className={styles.item}>
                    <span>Budget Spent:</span>
                    <i data-tip="Mars Coin" className="icon-mars_coin"></i>
                    <p>{company.budget_spent}</p>
                </div>
            </div>
        </li>
    )
}

export default Company
