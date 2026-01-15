import footer from "./footer";
import Header from "./header";

// // 4) შექმენით NumbersList კომპონენტი რომელიც აბრუნებს <ul> და შიგნით 3 <li> ელემენტს  
// <li>One</li>  
// <li>Two</li>  
// <li>Three</li>  
// App-ში გამოიტანეთ <NumbersList />
let NumbersList=<ul>
    <li>One</li>  
    <li>Two</li>  
    <li>Three</li> 
</ul>
function App() {
  return (
    <>
    <NumbersList/>
    </>
  );
  
}

export default App
