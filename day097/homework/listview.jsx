// 3) შექმენით ListContainer და ListView კომპონენტები.
//    ListContainer-ში state-ში გქონდეთ ელემენტების სია (array).
//    ListView კომპონენტს props-ით გადასცით სია.
//    ListView-ში სია უნდა დარენდერდეს map-ის გამოყენებით.
//    Container კომპონენტში არ უნდა იყოს JSX სიისთვის.'
import React from 'react';
import { ListView } from './listview';
import { useState } from "react";

export function ListContainer() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    return <ListView items={items} />;
}