// import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Modal from "./Modal";

import mockData from "../../../assets/data.json"

describe("Modal Component", () => {

    const { getByText, getByDisplayValue, getByLabelText } = render(<Modal company={mockData[0]} />)

    test('renders the correct content', () => {
        getByText(mockData[0].name);
        getByLabelText("Enter New Budget:");
        getByDisplayValue(mockData[0].budget);
        getByText("Save Budget");
    });
})