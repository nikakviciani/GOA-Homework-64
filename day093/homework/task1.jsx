// 3) შექმენით App კომპონენტი, სადაც გექნებათ state-ში რიცხვი (count).
//    შექმენით ცალკე Button კომპონენტი, რომელსაც props-ით გადასცემთ:
//    - ტექსტს (label)
//    - ფუნქციას (onClick)
//    ღილაკზე დაკლიკებისას უნდა იზრდებოდეს რიცხვი და შედეგი გამოჩნდეს პარაგრაფში.
import React, { useState } from 'react';

function Button(props) {
    return <button onClick={props.onClick}>{props.label}</button>;
}