import footer from "./footer";
import Header from "./header";
// 4) შექმენით SelfClosingExample კომპონენტი  
// დააბრუნეთ <img /> და <input /> Self-Closing ფორმატში  
// App-ში გამოიტანეთ <SelfClosingExample />  
// დააკვირდით JSX-ში ტეგების სწორ დახურვას
let SelfClosingExample=<div><img src="https://via.placeholder.com/150" alt="Placeholder"/><input type="text" placeholder="Type here"/></div>
function App() {
  return (
    <>
    <SelfClosingExample/>
    </>
  );
  
}

export default App
