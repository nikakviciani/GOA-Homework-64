import footer from "./footer";
import Header from "./header";
// 8) შექმენით ConditionalRender კომპონენტი  
// შექმენით const isLoggedIn = true  
// JSX-ში გამოიყენეთ ternary ოპერატორი  
// თუ true → "Welcome"  
// თუ false → "Please log in"
let isLoggedIn = true;
let VariableAttributes=<div>{isLoggedIn ? "Welcome" : "Please log in"}</div>;
function App() {
  return (
    <>
    <VariableAttributes/>
    </>
  );
  
}

export default App
