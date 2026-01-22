import React from 'react';

// 5) შექმენით Form.jsx კომპონენტი.
// კომპონენტში:
// - შექმენით <form> ელემენტი
// - გაუწერეთ onSubmit მოვლენის მსმენელი (handleSubmit)
// - ფორმაში გქონდეთ 4 input (ნებისმიერი ტიპის)
// - თითოეულ input-ს გაუწერეთ name ატრიბუტი

// handleSubmit ფუნქციაში:
// - გამოიყენეთ event.target.name.value
// - შექმენით ობიექტი ოთხივე მნიშვნელობით
// // - დაბეჭდეთ ეს ობიექტი კონსოლში
export default function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = {
            field1: event.target.field1.value,

            
            field2: event.target.field2.value,
            field3: event.target.field3.value,
            field4: event.target.field4.value,
        };
        
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="field1" placeholder="Field 1" required />
            <input type="email" name="field2" placeholder="Field 2" required />
            <input type="number" name="field3" placeholder="Field 3" required />
            <input type="password" name="field4" placeholder="Field 4" required />
            <button type="submit">Submit</button>
        </form>
    );
}