import { createContext, useState } from "react";
import { ICompany } from "../@types/types";

// Data
import data from "../assets/data.json"

// Types
interface IContext {
    companies: ICompany[];
    updateBudget: (newBudget: number, company: ICompany) => void
}

export const DataContext = createContext({} as IContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {

    // State
    const [companies, setCompanies] = useState<ICompany[]>(data);

    const updateBudget = (newBudget: number, company: ICompany) => {
        const updatedCompanies = [...companies];
        const companyToUpdateIndex = updatedCompanies.indexOf(company);
        updatedCompanies[companyToUpdateIndex] = { ...updatedCompanies[companyToUpdateIndex], budget: newBudget };
        setCompanies(updatedCompanies)
    }

    return (
        <DataContext.Provider value={{
            companies,
            updateBudget
        }}>
            {children}
        </DataContext.Provider>
    );
}
