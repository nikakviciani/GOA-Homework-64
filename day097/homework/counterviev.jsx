// 2) შექმენით CounterContainer და CounterView კომპონენტები.
//    CounterContainer-ში გამოიყენეთ useState რიცხვისთვის.
//    შექმენით ფუნქცია, რომელიც ზრდის რიცხვს.
//    ეს state და ფუნქცია props-ით გადასცით CounterView-ს.
//    CounterView კომპონენტში უნდა იყოს:
//    - პარაგრაფი რიცხვის გამოსატანად
//    - ღილაკი, რომელიც props-ით მიღებულ ფუნქციას გამოიძახებს
import { useState } from "react";
export function CounterView({ count, increment }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}