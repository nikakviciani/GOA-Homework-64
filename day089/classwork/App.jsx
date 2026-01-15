import footer from "./footer";
import Header from "./header";

let haspremium=true;
function App() {
  return (
    <div>
      <Header />
      <footer />
      {/* 1) react-ის გარემოში შექმენით რაიმე boolean ცვლადი, შემდეგ ამ ცვლადის მიხედვით ან დაარენდერეთ რაიმე ელემენტი (p) ან არა. შემდეგ უკვე ტერნარი ოპერატორის გამოყენებით შეამოწმეთ ეს ბოოლეანი თუ პირობა ჭეშმარიტია გამოიტანეთ პარაგრაფი წარმატების ტექსტით ხოლო თუ მცდარია პარაგრაფი შესაბამისი ტექსტით, ახსენით ტერნარი ოპერატორის სინტაქსი */}
      {/*ternari operator  */}
      {haspremium ? <p>you have premium</p> : <p>you don't have premium</p>}
      {/* თერნარი ოპერატორი არის if-ის დაწერა ჯსიქსში ასევე შეგვიძლია დავწეროთ */}
      {haspremium && <p>you have premium</p>}
      {/* ხოლო ეს არის იფის უფრო პრიმიტიული  ხერხი*/}
    </div>
  );
  
}

export default App
