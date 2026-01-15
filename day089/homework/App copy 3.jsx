import footer from "./footer";
import Header from "./header";
import Card from "./card";
import Info from "./info";
import ListRender from "./listRender";
// 5) შექმენით ობიექტების მასივი {id, name}. JSX-ში map() გამოყენებით გამოიტანეთ სია. თითოეულ ელემენტს აუცილებლად დაამატეთ key. კომენტარებში ახსენით რატომ არის key აუცილებელი React-ში
let massive = [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Doe"},
];
massive.map((item) => (
  <div key={item.id}>{item.name}</div>
));
// key არის აუცილებელი React-ში იმისთვის, რომ ის დაეხმაროს ვირტუალურ DOM-ს ეფექტურად და სწრაფად განაახლოს UI ცვლილებების დროს. key-ები უზრუნველყოფენ უნიკალურ იდენტიფიკატორებს თითოეული ელემენტისთვის, რაც საშუალებას აძლევს React-ს ზუსტად იცოდეს, რომელი ელემენტი შეიცვალა, დაემატა ან წაიშალა, და შესაბამისად ოპტიმიზირებულად განახორციელოს რენდერინგი.
function App() {
  return (
    <>
    <ListRender/>
    
    </>
  );
  
}

export default App