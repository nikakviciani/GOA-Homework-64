import footer from "./footer";
import Header from "./header";

// 3) შექმენით MyInfo კომპონენტი რომელიც აბრუნებს <p>მე ვსწავლობ React-ს</p>  
// App-ში გამოიტანეთ <MyInfo /> ორჯერ და ნახეთ როგორ შეიძლება ერთი კომპონენტის მრავალჯერ გამოყენება
let MyInfo=<p>hohooh</p>
function App() {
  return (
    <>
    <MyInfo/>
    <MyInfo/>
    </>
  );
  
}

export default App
