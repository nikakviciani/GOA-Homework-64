import { useState } from "react";



// 3) App კომპონენტმა უნდა დააბრუნოს 3 ელემენტი: 2 ღილაკი: მიმატება, გამოკლების და 1 პარაგრაფი რომელშიც ამჟამინდელ რიცხვით მნიშვნლობის შედეგს გამოიტანთ, ამისთვის უნდა გამოიყენოთ useState კაუჭი
function App() {
    const [count, setCount] = useState(0);
  return (

    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count * 2)}>*2</button>
      <button onClick={() => setCount(count / 2)}>/2</button>
      <p>count : {count}</p>

    </div>

  );
  
}

export default App