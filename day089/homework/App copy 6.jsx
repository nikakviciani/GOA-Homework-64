import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 8) React-ის კომპონენტში შექმენით ღილაკი და დაამატეთ onClick event. ღილაკზე დაჭერისას console.log-ში დაბეჭდეთ "Button clicked". კომენტარებში ახსენით როგორ მუშაობს event handling JSX-ში
function App() {
  const notificationsCount = 5;
  return (
    <>
      <button onClick={() => console.log("Button clicked")}>Click me</button>
    </>
  )
}

export default App
