import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 6) React-ის კომპონენტში შექმენით boolean ცვლადი. ternary ოპერატორის გამოყენებით თუ პირობა true არის გამოიტანეთ <p> ტექსტით "Welcome back", ხოლო თუ false არის გამოიტანეთ <p> ტექსტით "Please log in". კომენტარებში ახსენით ternary ოპერატორის სინტაქსი
let isLoggedIn = true;
function App() {
  return (
    <>
      {isLoggedIn ? <p>Welcome back</p> : <p>Please log in</p>}
    </>
  )
}

export default App
