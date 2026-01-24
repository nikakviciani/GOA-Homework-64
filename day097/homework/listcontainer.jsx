// 3) შექმენით ListContainer და ListView კომპონენტები.
//    ListContainer-ში state-ში გქონდეთ ელემენტების სია (array).
//    ListView კომპონენტს props-ით გადასცით სია.
//    ListView-ში სია უნდა დარენდერდეს map-ის გამოყენებით.
//    Container კომპონენტში არ უნდა იყოს JSX სიისთვის.
import React from 'react';

export function ListView({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}