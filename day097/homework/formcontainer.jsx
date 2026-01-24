// 5) შექმენით FormContainer და FormView კომპონენტები.
//    FormContainer-ში გამოიყენეთ useState ინფუთის მნიშვნელობისთვის.
//    შექმენით submit ფუნქცია.
//    FormView კომპონენტში უნდა იყოს:
//    - input
//    - ღილაკი
//    მონაცემები მიიღოს მხოლოდ props-ით.
import { useState } from "react";
export function FormView({ inputValue, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}