// 5) შექმენით FormContainer და FormView კომპონენტები.
//    FormContainer-ში გამოიყენეთ useState ინფუთის მნიშვნელობისთვის.
//    შექმენით submit ფუნქცია.
//    FormView კომპონენტში უნდა იყოს:
//    - input
//    - ღილაკი
//    მონაცემები მიიღოს მხოლოდ props-ით.
import { useState } from "react";
import { FormView } from "./formview";
import React from 'react';

export function FormContainer() {
  const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted value:", inputValue);
    };
  return <FormView inputValue={inputValue} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />;
}