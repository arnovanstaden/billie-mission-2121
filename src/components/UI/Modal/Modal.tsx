import { ICompany } from "../../../@types/types";
import { useContext, useRef } from "react";
import toaster from "toasted-notes";


// Context
import { ModalContext } from "../../../context/ModalContext";
import { DataContext } from "../../../context/DataContext";

import styles from "./modal.module.scss";

const Modal = ({ company }: { company: ICompany }) => {
    // Config
    const budgetRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    // Context
    const { closeModal } = useContext(ModalContext);
    const { updateBudget } = useContext(DataContext);

    // Handlers
    const handleSubmit = () => {
        const budget = parseFloat(budgetRef.current.value);
        console.log(budget)

        // Test Budget
        if (budget < company.budget_spent) {
            return toaster.notify("New budget cannot be less than the budget spent.")
        }

        updateBudget(budget, company);
        toaster.notify("Budget Updates Successfully!");
        return closeModal()
    }

    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={closeModal}></div>
            <div className={styles.inner}>
                <small>Adjust Budget</small>
                <h5>{company.name}</h5>
                <label hidden htmlFor="adjust-budget">Adjust Budget</label>
                <input min={0} ref={budgetRef} type="number" name="adjust-budget" defaultValue={company.budget} />
                <button onClick={handleSubmit}>Save Budget</button>
            </div>
        </div>
    )
}

export default Modal