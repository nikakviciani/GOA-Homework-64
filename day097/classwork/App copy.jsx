import { useEffect, useState } from 'react'
import calculator from './calculator'


function App() {
  calculator()
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
    )}


export default App;
