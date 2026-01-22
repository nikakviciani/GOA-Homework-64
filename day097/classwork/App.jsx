import { useEffect, useState } from 'react'
// import calculator from './calculator'
// 1) შექმენით კალკულატორის კომპონენტი რომელიც გამოიტანს ფორმას 2 შესატანი ველით, ღილაკით და პარაგრაფით. ღილაკზე დაჭერისას (მოხდება ფორმის დადასტურება onSubmit-ზე handler ფუნქციის გამოძახება) უნდა შეიკრიბოს შესტან ველებში მყოფი რიცხვები და განახლდეს ჯამის მდგომარეობაში შენახული ამჟამინდელი მნიშვნელობა (რომელიც თავიდან ნულია) პარაგრაფში უნდა გამოვიდეს ჯამის მდგომარეობა Sum: ტექსთან ერთად
function calculator(a, b, operation) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "minus") {
    return a - b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "divide") {
    if (b === 0) {
      return "you can't divide by zero";
    }
    return a / b;
  }
}

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    setResult(calculator(Number(a), Number(b), operation));
  };

  return (
    <div>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <div>
        <button onClick={() => handleCalculate("add")}>+</button>
        <button onClick={() => handleCalculate("minus")}>-</button>
        <button onClick={() => handleCalculate("multiply")}>*</button>
        <button onClick={() => handleCalculate("divide")}>/</button>
      </div>

      <p>Result: {result}</p>
    </div>
  );
}

export default App;
