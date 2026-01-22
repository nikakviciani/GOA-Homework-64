import { useState } from 'react';

// 7) შექმენით მდგომარეობა, რომელშიც შეინახავთ ხილების მასივს.
// - ღილაკზე დაჭერისას დაამატეთ "orange"
// - მეორე ღილაკზე დაჭერისას გაასუფთავეთ მასივი
// - გამოიტანეთ შედეგი ეკრანზე
export default function FruitList() {
    const [fruits, setFruits] = useState([]);

    const addOrange = () => {
        setFruits([...fruits, 'orange']);
    };

    const clearFruits = () => {
        setFruits([]);
    };

    return (
        <div>
            <button onClick={addOrange}>დაამატე Orange</button>
            <button onClick={clearFruits}>გაასუფთავე</button>
            <p>ხილები: {fruits.join(', ')}</p>
        </div>
    );
}