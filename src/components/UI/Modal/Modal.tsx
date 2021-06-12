import { ICompany } from "../../../@types/types";
import { useContext } from "react";
// Context
import { ModalContext } from "../../../context/ModalContext";

import styles from "./modal.module.scss";

const Modal = ({ company }: { company: ICompany }) => {

    // Context
    const { closeModal } = useContext(ModalContext)

    return (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={closeModal}></div>
            <div className={styles.inner}>
                <small>Adjust Budget</small>
                <h5>{company.name}</h5>
                <label hidden htmlFor="adjust-budget">Adjust Budget</label>
                <input type="number" name="adjust-budget" defaultValue={company.budget} />
                <button>Save Budget</button>
            </div>
        </div>
    )
}

export default Modal
