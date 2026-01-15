import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 8) React კომპონენტში შექმენით რიცხვითი ცვლადი age. JSX-ს გარეთ დაწერეთ if პირობა, რომელიც ამოწმებს: თუ age >= 18, ცვლადში result ჩაწერეთ "Adult", სხვა შემთხვევაში "Minor". JSX-ში გამოიტანეთ result. კომენტარებში ახსენით რატომ არ შეიძლება if-ის პირდაპირ გამოყენება JSX-ში
function App() {
  const age=19
  let result=NaN
  if (age >= 18){
    result ="Adult"
  }
  elif(
    result='minor'
  )
  return (
    <>
      <p>{result}</p>
    </>
    
  )
}

export default App
