import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//7) React კომპონენტში შექმენით boolean ცვლადი isAdmin. ternary ოპერატორის გამოყენებით JSX-ში თუ isAdmin არის true გამოიტანეთ <p> ტექსტით "Admin panel", ხოლო თუ false — <p> ტექსტით "User panel". კომენტარებში ახსენით ternary ოპერატორის სტრუქტურა
function App() {
  const isAdmin = true
  return (
    <>
      {isAdmin ? <p>Admin panel</p> : <p>User panel</p>}
    </>
    
  )
}

export default App
