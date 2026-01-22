// 3) შექმენით ორი კომპონენტისგან შემდგარი ვებსაიტი.
import {useEffect} from "react";
const [formData, setFormData] = require("react").useState({});
const [displayData, setDisplayData] = require("react").useState({});
// I კომპონენტი:
// - შექმენით ფორმა
// - ყველა input-ის ცვლილებისას (onChange) განაახლეთ მდგომარეობაში შენახული ობიექტი
// - ფორმის დადასტურებისას (onSubmit) შეინახეთ ეს ობიექტი localStorage-ში string-ის სახით

// II კომპონენტი:
// - ღილაკზე დაჭერისას წამოიღეთ მონაცემები localStorage-დან
// - გადააქცევთ string-ს ობიექტად
// - თითოეული property გამოიტანეთ პარაგრაფში
// - პარაგრაფები უნდა გამოჩნდეს მხოლოდ მაშინ, თუ მნიშვნელობები ცარიელი არ არის


{

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
    };

    const handleRetrieve = () => {
        const data = localStorage.getItem("formData");
        if (data) {
            setDisplayData(JSON.parse(data));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" onChange={handleChange} placeholder="Name" />
                <input name="email" onChange={handleChange} placeholder="Email" />
                <button type="submit">Save</button>
            </form>

            <button onClick={handleRetrieve}>Load Data</button>

            {Object.entries(displayData).map(
                ([key, value]) =>
                    value && <p key={key}>{key}: {value}</p>
            )}
        </div>
    );
}

export default f1;