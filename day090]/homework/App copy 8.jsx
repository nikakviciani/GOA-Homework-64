import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 10) ReactDOM.createRoot-ის გამოყენებით შექმენით root. root.render-ში დაარენდერეთ <div>, რომლის შიგნით info კომპონენტი გამოიძახება სამჯერ ( {info()} ). კომენტარებში ახსენით რატომ შეგვიძლია კომპონენტის რამდენჯერმე გამოძახება
function info() {
  return <p>Hello React</p>;
}
  ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
      {info()}
      {info()}
      {info()}
    </div>
  );
// კომენტარი: კომპონენტის რამდენჯერმე გამოძახება შესაძლებელია იმიტომ, რომ info არის ფუნქცია, რომელიც ყოველ ჯერზე ახალ JSX ელემენტს აბრუნებს. ამიტომ, როდესაც ჩვენ ვიძახებთ info()-ს, ჩვენ ვქმნით ახალ პუნქტს თითოეულ გამოძახებაზე.
function App() {
  
  
  return (
    <>
      <i>{info()}</i>
    </>
    
  )
}

export default App
