import footer from "./footer";
import Header from "./header";
// 2) დააბრუნეთ <h1>Hello React</h1>  
// App.jsx-ში გამოიტანეთ <SimpleComponent />  
// დაინახეთ როგორ მუშაობს JSX და კომპონენტის გამოძახება
let SimpleComponent=<h1>Hello React</h1>
function App() {
  return (
    <>
    <SimpleComponent/>
    </>
  );
  
}

export default App
