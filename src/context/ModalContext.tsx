import { createContext, useState } from "react";
import { ICompany } from "../@types/types";

// Components
import Modal from "../components/UI/Modal/Modal"
// Types
interface IContext {
    company: ICompany | null;
    openModal: (company: ICompany) => void
    closeModal: () => void
}

export const ModalContext = createContext({} as IContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {


    // State
    const [company, setCompany] = useState<ICompany | null>(null);

    const openModal = (company: ICompany) => {
        setCompany(company)
    }

    const closeModal = () => {
        setCompany(null)
    }

    return (
        <ModalContext.Provider value={{
            company,
            openModal,
            closeModal
        }}>
            {children}
            {company && <Modal company={company} />}
        </ModalContext.Provider>
    );
}
