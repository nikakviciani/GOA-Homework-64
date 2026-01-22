// 4) შექმენით CounterAlert კომპონენტი. შექმენით count მდგომარეობა. ღილაკზე დაჭერისას გაზარდეთ count 1-ით. useEffect-ის დახმარებით გამოიტანეთ alert ტექსტით "Lucky number", როდესაც count გაუტოლდება 7-ს. კომენტარებში ახსენით რატომ უნდა იყოს ეს ლოგიკა useEffect-ში
import { useEffect, useState } from "react";

function CounterAlert() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // ეს ლოგიკა useEffect-ში უნდა იყოს რომ alert-ი მხოლოდ ერთხელ გამოიტანოს, როდესაც count გაუტოლდება 7-ს
        if (count === 7) {
            alert("Lucky number");
        }
    }, [count]);}
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
