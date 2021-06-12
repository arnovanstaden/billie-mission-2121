import { render, fireEvent } from '@testing-library/react';

// Components
import Modal from "./Modal";
import { DataContext } from "../../../context/DataContext";
import { ModalContext } from "../../../context/ModalContext";

import mockData from "../../../assets/data.json";




describe("<Modal />", () => {
    // Config
    const company = mockData[0];

    const dataValue = {
        companies: mockData,
        updateBudget: jest.fn()
    }

    const modalValue = {
        company: company,
        openModal: jest.fn().mockReturnValue,
        closeModal: jest.fn()
    }

    const renderWithContext = () => {

        return render(
            <DataContext.Provider value={dataValue}>
                <ModalContext.Provider value={modalValue}>
                    <Modal company={company} />
                </ModalContext.Provider>
            </DataContext.Provider>
        );
    }

    test('renders the modal with company name and one input field', () => {
        const { getByText, getByLabelText } = render(<Modal company={company} />)

        getByText(company.name);
        getByLabelText("Enter New Budget:");
    });

    test('input field is pre-filled with budget', () => {
        const { getByDisplayValue } = render(<Modal company={company} />)

        getByDisplayValue(company.budget);
    });

    test('user can edit the value and submit;', () => {
        const { getByText, getByLabelText } = render(<Modal company={company} />)

        const button = getByText("Save Budget");
        const input = getByLabelText("Enter New Budget:");

        fireEvent.change(input, { target: { value: company.budget_spent - 1 } })
        fireEvent.click(button);
    });

    test("invalid value | new budget < spent - no submission + error message", async () => {
        const { getByText, getByLabelText, findAllByText } = render(<Modal company={company} />)

        const button = getByText("Save Budget");
        const input = getByLabelText("Enter New Budget:");

        fireEvent.change(input, { target: { value: company.budget_spent - 1 } })
        fireEvent.click(button);

        getByText(company.name);
        await findAllByText("New budget cannot be less than the budget spent.");
    })

    test("allows users to update the budget in companies list", async () => {
        const { getByText, getByLabelText } = renderWithContext()

        const button = getByText("Save Budget");
        const input = getByLabelText("Enter New Budget:");

        fireEvent.change(input, { target: { value: company.budget_spent + 1 } })
        fireEvent.click(button)

        expect(modalValue.closeModal).toBeCalled();
        expect(dataValue.updateBudget).toBeCalledWith(company.budget_spent + 1, company);

        const updatedCompanyData = { ...company, budget_spent: company.budget_spent + 1 }
        dataValue.companies.includes(updatedCompanyData)
    });

    test("show success message after successful submission of new budget", async () => {
        const { getByText, getByLabelText, findAllByText } = renderWithContext()

        const button = getByText("Save Budget");
        const input = getByLabelText("Enter New Budget:");

        fireEvent.change(input, { target: { value: company.budget_spent + 1 } })
        fireEvent.click(button)

        // Data updated + Modal Closed
        await findAllByText("Budget Updated Successfully!");
    })


})