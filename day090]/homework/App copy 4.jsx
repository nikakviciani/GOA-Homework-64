import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//6) React კომპონენტში შექმენით boolean ცვლადი showText. JSX-ში && ოპერატორის გამოყენებით გამოიტანეთ <p> ტექსტით "This text is visible" მხოლოდ მაშინ, როცა showText არის true. კომენტარებში ახსენით && ოპერატორის მუშაობის პრინციპი JSX-ში
function App() {
  const showText = true
  return (
    <>
      {showText && <p>This text is visible</p>}
    </>
    
  )
}

export default App
