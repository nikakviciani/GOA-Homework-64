// 8) შექმენით Counter კომპონენტი, რომელიც მიიღებს props-ით:
//    - count
//    - increment ფუნქციას
//    App კომპონენტში გამოიყენეთ useState და გადასცით ეს მნიშვნელობები Counter-ს.
//    Counter კომპონენტში ღილაკზე დაჭერისას უნდა იმატებდეს რიცხვი.
import React, { useState } from 'react';
function counter(props){
    return(
        <>
            <p>{props.count}</p>
            <button onClick={props.increment}>იმატე</button>
        </>
    );
}