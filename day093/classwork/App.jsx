import footer from "./footer";
import Header from "./header";
import Card from "./card";
import Info from "./info";
import ListRender from "./listRender";
import Greeting from "./greeting";
// 1) შექმენით კომპონენტი greeting, რომელიც დააბრუნებს 2 სათაურს პირველში ტექსტით "First Name: [name] მეორეში "Last Name [surname] კომპონენტმა პარამეტრად უნდა მიიღოს props როდესაც მას App.jsx-ში დააიმპორტებთ გადაეცით 2 prop: name, surname

function App() {
  return (
    <>
    <Greeting name="John" surname="Doe"/>
    </>
  );
  
}

export default App