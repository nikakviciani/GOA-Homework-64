import footer from "./footer";
import Header from "./header";
  
// 10) შექმენით EventExample კომპონენტი  
// დააბრუნეთ <button>Click Me</button>  
// დაამატეთ onClick event  
// ღილაკზე დაჭერისას console.log-ში გამოიტანეთ "Clicked"
let ListRender = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}
function App() {
  return (
    <>
    <ListRender/>
    </>
  );
  
}

export default App
