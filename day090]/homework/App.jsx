import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 2) შექმენით ფუნქციური React კომპონენტი, რომელიც აბრუნებს მრავალსტრიქონიან JSX-ს. JSX-ში გამოიყენეთ <div>, <h1> და <p>. დააკვირდით, რატომ არის აუცილებელი ყველა ელემენტის ერთ მშობელ ელემენტში მოქცევა. კომენტარებში ახსენით Multiline JSX-ის წერის წესი
// რადგან JSX-ში ჩვენ არ შეგვიძლია რამდენიმე ელემენტის პირდაპირ დაბრუნება, აუცილებელია ყველა ელემენტი იყოს ერთ მშობელ ელემენტში მოქცეული. ამისთვის ხშირად ვიყენებთ <div> ან React.Fragment (<> </>) როგორც მშობელ ელემენტს.
function App() {
  const notificationsCount = 5;
  const numbers = [10, 20, 30];
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
      </div>
    </>
    
  )
}

export default App
