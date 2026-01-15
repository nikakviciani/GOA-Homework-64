import footer from "./footer";
import Header from "./header";
// 7) შექმენით VariableAttributes კომპონენტი  
// შექმენით ცვლადი imageUrl სურათის ლინკით  
// დააბრუნეთ <img src={imageUrl} />  
// დააკვირდით როგორ მუშაობს ცვლადი JSX ატრიბუტში
let imageUrl="https://www.example.com/image.jpg";
  let VariableAttributes=<img src={imageUrl} alt="Example Image"/>;
function App() {
  return (
    <>
    <VariableAttributes/>
    </>
  );
  
}

export default App
