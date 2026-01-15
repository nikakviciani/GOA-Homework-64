import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 9) მოცემული კოდის მიხედვით შექმენით ფუნქციური კომპონენტი info, რომელიც აბრუნებს <p> ტექსტით "Hello React". შემდეგ გამოიყენეთ ReactDOM.createRoot და root.render ისე, რომ ეკრანზე გამოჩნდეს info კომპონენტი info() გამოძახებით. კომენტარებში ახსენით რას აკეთებს createRoot და render
function info() {
  return <p>Hello React</p>;
}

function App() {
  
  
  return (
    <>
      <i>{info()}</i>
    </>
    
  )
}

export default App
