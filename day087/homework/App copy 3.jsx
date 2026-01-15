import footer from "./footer";
import Header from "./header";
// 5) შექმენით JsInJsx კომპონენტი  
// შექმენით ცვლადი const name = "React Student"  
  // დააბრუნეთ <h2>Hello React Student</h2> ცვლადის გამოყენებით  
  // გამოიყენეთ {} JSX-ში
  let SelfClosingExample=<div><img src="https://via.placeholder.com/150" alt="Placeholder"/><input type="text" placeholder="Type here"/></div>
function App() {
  return (
    <>
    <SelfClosingExample/>
    </>
  );
  
}

export default App
