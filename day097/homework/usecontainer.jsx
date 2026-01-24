// 6) შექმენით UserContainer და UserView კომპონენტები.
//    UserContainer-ში შეინახეთ state:
//    - name
//    - age
//    UserView კომპონენტს props-ით გადასცით ეს მონაცემები.
//    UserView-ში უნდა გამოჩნდეს ინფორმაცია ტექსტის სახით.
import React from 'react';

export function UserView({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}