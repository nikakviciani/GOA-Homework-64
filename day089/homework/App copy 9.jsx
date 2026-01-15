import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 11) შექმენით მასივი [10, 20, 30]. JSX-ში map() გამოყენებით დააბრუნეთ ტექსტი ფორმატში "Index: X, Value: Y" თითოეული ელემენტისთვის
function App() {
  const notificationsCount = 5;
  const numbers = [10, 20, 30];
  return (
    <>
      {numbers.map((value, index) => (
        <p key={index}>Index: {index}, Value: {value}</p>
      ))}
    </>
    
  )
}

export default App
