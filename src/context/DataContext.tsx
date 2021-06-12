import { createContext, useState } from "react";
import { ICompany } from "../@types/types";

// Data
import data from "../assets/data.json"

// Types
interface IContext {
    companies: ICompany[];
}

export const DataContext = createContext({} as IContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {

    // State
    const [companies, setCompanies] = useState<ICompany[]>(data);

    return (
        <DataContext.Provider value={{
            companies,
        }}>
            {children}
        </DataContext.Provider>
    );
}
