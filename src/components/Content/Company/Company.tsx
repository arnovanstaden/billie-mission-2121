import { ICompany, TView } from "../../../types/types";
import ClassNames from "classnames";
import { formatNumber } from "../../../utils/utils"

// Components
import Currency from "../../UI/Library/Currency/Currency"

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
                    <Currency />
                    <p>{formatNumber(company.budget)}</p>
                </div>
                <div className={styles.item}>
                    <span>Spent:</span>
                    <Currency />
                    <p>{formatNumber(company.budget_spent)}</p>
                </div>
                <div className={styles.item}>
                    <span>Available:</span>
                    <Currency />
                    <p>{formatNumber(company.budget - company.budget_spent)}</p>
                </div>
            </div>
        </li>
    )
}

export default Company
