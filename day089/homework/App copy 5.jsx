import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 7) React-ის კომპონენტში შექმენით რიცხვითი ცვლადი (მაგ: notificationsCount). && ოპერატორის გამოყენებით დაარენდერეთ <p> ტექსტით "You have new notifications" მხოლოდ მაშინ, როცა რიცხვი მეტია 0-ზე. კომენტარებში ახსენით რატომ მუშაობს && ამ შემთხვევაში
function App() {
  const notificationsCount = 5;
  return (
    <>
      <p>{notificationsCount > 0 && "You have new notifications"}</p>
    </>
  )
}

export default App
