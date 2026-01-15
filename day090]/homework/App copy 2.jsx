import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//4) React კომპონენტში შექმენით ცვლადი imgUrl და ჩაწერეთ სურათის ლინკი. JSX-ში <img> ტეგის src ატრიბუტში გამოიყენეთ ეს ცვლადი. კომენტარებში ახსენით რას ნიშნავს Variable Attribute JSX-ში
function App() {
  const notificationsCount = 5;
  const numbers = [10, 20, 30];
  let imgUrl = "https://example.com/image.jpg";
  return (
    <>
      <img src={imgUrl} alt="" />
    </>
    
  )
}

export default App
