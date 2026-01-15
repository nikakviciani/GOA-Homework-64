import footer from "./footer";
import Header from "./header";
import Card from "./card";
import Info from "./info";
import ListRender from "./listRender";
// 2) React-ის კომპონენტში შექმენით boolean ცვლადი. && ოპერატორის გამოყენებით დაარენდერეთ <p> ტექსტით "User is active" მხოლოდ მაშინ, როცა boolean არის true. კომენტარებში ახსენით && ოპერატორის ლოგიკა JSX-ში
let isactive=true
function App() {
  return (
    <>
    <ListRender/>
    {isactive && <p>User is active</p>}
    </>
  );
  
}

export default App