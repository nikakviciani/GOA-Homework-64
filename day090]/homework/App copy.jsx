import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 3) React კომპონენტში შექმენით ცვლადი title ტექსტით "Welcome to React". გამოიყენეთ ეს ცვლადი <h1> ელემენტის შიგნით JSX-ში. კომენტარებში ახსენით როგორ მუშაობს ცვლადების ჩასმა JSX-ში { } ფრჩხილებით
function App() {
  const notificationsCount = 5;
  const numbers = [10, 20, 30];
  let title = "Welcome to React";
  return (
    <>
      <h1>{title}</h1>
    </>
    
  )
}

export default App
