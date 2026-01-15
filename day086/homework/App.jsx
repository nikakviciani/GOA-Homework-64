import footer from "./footer";
import Header from "./header";

// 3) შექმენით MyInfo კომპონენტი რომელიც აბრუნებს <p>მე ვსწავლობ React-ს</p>  
// App-ში გამოიტანეთ <MyInfo /> ორჯერ და ნახეთ როგორ შეიძლება ერთი კომპონენტის მრავალჯერ გამოყენება
let SimpleGreeting=<h1>Hello React!</h1>
function App() {
  return (
    <>
    <SimpleGreeting/>
    </>
  );
  
}

export default App
