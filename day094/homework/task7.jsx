import { useState, useEffect } from 'react';

// 9) შექმენით AdviceGenerator კომპონენტი. კომპონენტის ჩატვირთვისას useEffect-ის გამოყენებით წამოიღეთ რჩევა API-დან და გამოიტანეთ ტექსტი <p> ელემენტში. დაამატეთ ღილაკი "New advice", რომელზე დაჭერისას შეიცვლება მდგომარეობა და გამოიძახება useEffect ხელახლა

// https://api.adviceslip.com/advice

export default function AdviceGenerator() {
    const [advice, setAdvice] = useState('');
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => setAdvice(data.slip.advice));
    }, [trigger]);

    return (
        <div>
            <p>{advice}</p>
            <button onClick={() => setTrigger(trigger + 1)}>New advice</button>
        </div>
    );
}