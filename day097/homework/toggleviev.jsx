// 4) შექმენით ToggleContainer და ToggleView კომპონენტები.
//    ToggleContainer-ში state-ში შეინახეთ boolean მნიშვნელობა.
//    შექმენით ფუნქცია, რომელიც ცვლის მნიშვნელობას (true / false).
//    ToggleView-ში props-ით მიღებული მნიშვნელობის მიხედვით:
//    - გამოჩნდეს ტექსტი "ON" ან "OFF"
//    - ღილაკზე დაჭერისას გამოიძახოს გადმოცემული ფუნქცია
import React from 'react';
import { useState } from "react";
import { ToggleView } from "./toggleview";

export function ToggleContainer() {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);
  return <ToggleView isOn={isOn} toggle={toggle} />;
}