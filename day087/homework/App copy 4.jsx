import footer from "./footer";
import Header from "./header";
// 6) შექმენით CurlyBracesExample კომპონენტი  
// დააბრუნეთ <p> სადაც გამოთვლილია 10 + 5  
// გამოიყენეთ {} JSX-ში  
// დააკვირდით JavaScript-ის ჩასმას JSX-ში
  let CurlyBracesExample=<p>{10 + 5}</p>;
function App() {
  return (
    <>
    <CurlyBracesExample/>
    </>
  );
  
}

export default App
