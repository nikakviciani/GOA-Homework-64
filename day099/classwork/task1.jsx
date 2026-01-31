import React from "react";
import { useEffect,useState } from "react";

// 1) შექმენით ფორმა 2 შესატანი ველით, სახელისა და პაროლის, ასევე უნდა იყოს submit input-იც. კომპონენტში შექმენით ფუნქცია handleSubmit რომელსაც გამოიძახეთ ფორმის დადასტურებისას, მოვლენის ობიექტი e მიიღეთ და გაუკეთეთ .preventDefault() მოვლენბის ობიექტიდან აიღეთ სამიზინე (target) საიდანც elements და name ატრიბუტის გამოყენებით წამოიღებთ სახელისა და პაროლის ამჟამინდელ მნიშვნლობებს, შეამოწმეთ თუ პაროლის სიგრძე ნაკლებია 8-ზე მაშინ საიტზე უნდა გამოდიოდეს კიდევ ერთი პარაგრაფი რომელიც მიგვითებებს რომ პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, ამისთვის გამოიყენეთ მდგომარეობა

const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    const formName = e.target.elements.name.value;
    const formPassword = e.target.elements.password.value;
    if (formPassword.length < 8) {
        setError("პაროლი ან სახელი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს");
    }
};

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="სახელი" required />
            {error && <p>{error}</p>}
            <input type="password" name="password" placeholder="პაროლი" required />
            {error && <p>{error}</p>}
            <input type="submit" value="დადასტურება" />
        </form>
        {error && <p>{error}</p>}
    </div>
);