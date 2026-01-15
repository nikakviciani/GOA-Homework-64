import footer from "./footer";
import Header from "./header";
import Card from "./card";
import Info from "./info";
import ListRender from "./listRender";
// 3) JSX-ში სცადეთ if განცხადების პირდაპირ გამოყენება და დააკვირდით შეცდომას. შემდეგ იგივე პირობა განახორციელეთ JSX-ს გარეთ ცვლადის დახმარებით და შედეგი გამოიტანეთ JSX-ში. კომენტარებში ახსენით რატომ არ მუშაობს if პირდაპირ JSX-ში
let isActive = true;
function App() {
  return (
    <>
    {if (isActive)===true : console.log("active")}
    {/* ეს იმიტომ არ მუშაობს რომ იფ განცხადება არის ჯავასკრიპტის სიტყვა ხოლო ჩვენ ამ შემთხვევაში ვიყენებთ ჰტმლს */}
    </>
  );
  
}

export default App
