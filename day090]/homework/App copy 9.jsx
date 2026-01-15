import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 11) შექმენით მასივი ["HTML", "CSS", "JavaScript", "React"]. JSX-ში map() გამოყენებით დაარენდერეთ <li> ელემენტები <ul>-ის შიგნით. კომენტარებში ახსენით რატომ ვიყენებთ map()-ს სიების გამოსატანად React-ში
function info() {
  return <p>Hello React</p>;
}
let languages = ["HTML", "CSS", "JavaScript", "React"];
function App() {
  
  
  return (
    <>
      <li>{
        languages.map(item => <li>{item}</li>)
        }</li>
    </>
    
  )
}

export default App
