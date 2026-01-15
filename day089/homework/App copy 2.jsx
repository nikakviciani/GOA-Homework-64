import footer from "./footer";
import Header from "./header";
import Card from "./card";
import Info from "./info";
import ListRender from "./listRender";
// 4) შექმენით მასივი [1, 2, 3, 4, 5]. JSX-ში map() გამოყენებით დააბრუნეთ <li> ელემენტები, სადაც ლუწი რიცხვები გაორმაგებულია, ხოლო კენტები უცვლელი. კომენტარებში ახსენით map()-ის როლი JSX-ში
let massivi =[1,2,3,4,5];
let liite=<ul></ul>;
massivi.map((item)=>{
  if(item%2==0){
    liite=<li>{item*2}</li>
  }else{
    liite=<li>{item}</li>
  }
  console.log(liite);
})
// map() ფუნქცია გამოიყენება მასივის თითოეული ელემენტის გადამუშავებისთვის და ახალი ელემენტების შექმნისთვის JSX-ში. 
// ამ შემთხვევაში, ჩვენ ვქმნით <li> ელემენტებს, სადაც ლუწი რიცხვები გაორმაგებულია, ხოლო კენტი რიცხვები უცვლელია.

let isactive=true;
function App() {
  return (
    <>
    <ListRender/>
    {isactive && <p>User is active</p>}
    </>
  );
  
}

export default App