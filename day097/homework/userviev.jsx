// 6) შექმენით UserContainer და UserView კომპონენტები.
//    UserContainer-ში შეინახეთ state:
//    - name
//    - age
//    UserView კომპონენტს props-ით გადასცით ეს მონაცემები.
//    UserView-ში უნდა გამოჩნდეს ინფორმაცია ტექსტის სახით.
import React from 'react';
import { useState } from "react";
import { UserView } from "./userview";
export function UserContainer() {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(30);
  return <UserView name={name} age={age} />;
}