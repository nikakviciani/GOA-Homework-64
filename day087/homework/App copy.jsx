import footer from "./footer";
import Header from "./header";
// 3) შექმენით ClassNameExample კომპონენტი  
// დააბრუნეთ <div className="box">Content</div>  
// კომენტარებში ახსენით რატომ ვიყენებთ className-ს და არა class-ს JSX-ში  
// App-ში გამოიტანეთ <ClassNameExample />
let classNameExample = <div className="box">Content</div>;
function App() {
  return (
    <>
    <classNameExample/>
    </>
  );
  
}

export default App
