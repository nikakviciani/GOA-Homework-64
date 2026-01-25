import { useEffect, useState } from 'react'
import './App.css'
export default function App() {
  const style={
    backgroundColor: 'lightgreen',
    color: 'darkgreen'
  }
  return (
    // 2) შექმენით რაიმე div 2 სათაურაით: პირველში ეწერება inline styling ხოლო მეორეში object variable styling. პირველ ელემენტს მიანიჭეთ ღია მწვანე ფონის ფერად და მუქი წვანე ტექსტის ფერად inline გასტვილის გზით, ხოლო მეორე ობიექტის გასტილვის გზით.
    <div>
        <p style={{ backgroundColor: 'lightgreen', color: 'darkgreen' }}>inline </p>
        <p style={style}>object variable</p>
        <p className=''></p>
    </div>
  )
}