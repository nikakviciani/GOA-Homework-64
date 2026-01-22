// 5) შექმენით List და ListItem კომპონენტები.
//    App კომპონენტში შექმენით სია (array) state-ის გამოყენებით.
//    List კომპონენტს props-ით გადასეცით სია,
//    ხოლო ListItem კომპონენტს თითო ელემენტი ცალ-ცალკე.
//    სია უნდა დარენდერდეს map-ის გამოყენებით.
import React, { useState } from 'react';
import App from '../classwork/App';

function Listitem(props){
    return <li>{props.item}</li>;

}
function List(props){   
    return (
        <ul>
            {props.items.map((item, index) => (
                <Listitem key={index} item={item} />
            ))}
        </ul>
    );
}
function App(){
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    return (
        <ul>
            {items.map((item, index) => (
                <Listitem key={index} item={item} />
            ))}
        </ul>
    );
}