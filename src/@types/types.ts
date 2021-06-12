export interface ICompany {
    id: number,
    name: string,
    budget: number,
    budget_spent: number,
    date_of_first_purchase: string
}

export type TView = "Grid" | "Row";