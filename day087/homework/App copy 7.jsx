import footer from "./footer";
import Header from "./header";
// 9) შექმენით ListRender კომპონენტი  
// შექმენით მასივი const items = ["HTML", "CSS", "JS"]  
// JSX-ში გამოიყენეთ map()  
// დააბრუნეთ <ul> სიის ელემენტებით
const items = ["HTML", "CSS", "JS"]  
let ListRender=items.map((item)=><ul><li>{item}</li></ul>)
function App() {
  return (
    <>
    <ListRender/>
    </>
  );
  
}

export default App
