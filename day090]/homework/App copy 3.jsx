import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//5) React კომპონენტში შექმენით boolean ცვლადი isLoggedIn. JSX-ს გარეთ დაწერეთ ლოგიკა, რომელიც ქმნის ცვლადს message. თუ isLoggedIn არის true, message იყოს "Hello user", წინააღმდეგ შემთხვევაში "Please log in". JSX-ში გამოიტანეთ message. კომენტარებში ახსენით რას ``ნიშნავს ლოგიკის გამოყოფა JSX-დან
function App() {
  const notificationsCount = 5;
  const numbers = [10, 20, 30];
  let imgUrl = "https://example.com/image.jpg";
  const isLoggedIn = true;
  let message;
  if (isLoggedIn) {
    message = "Hello user";
  } else {
    message = "Please log in";
  }
  return (
    <>
      <p>{message}</p>
    </>
    
  )
}

export default App
