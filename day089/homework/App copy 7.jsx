import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 9) JSX-ის გარეშე, React.createElement-ის გამოყენებით შექმენით <h1> სათაური ტექსტით "Hello without JSX". კომენტარებში ახსენით განსხვავება JSX-სა და React.createElement-ს შორის
function App() {
  const notificationsCount = 5;
  return (
    <>
    </>
  )
}
// JSX არის სინტაქსური გაფართოება JavaScript-ისთვის, რომელიც საშუალებას გვაძლევს HTML-ს მსგავსი კოდი დავწეროთ JavaScript-ში. JSX კოდი კომპილირდება React.createElement ფუნქციების სერიად, რაც საბოლოოდ ქმნის ვირტუალურ DOM ელემენტებს. React.createElement პირდაპირი მეთოდია ელემენტების შექმნისთვის, რომელიც უფრო ვერბოზულია და ნაკლებად წაკითხვადი შედარებით JSX-სთან.
export default App
