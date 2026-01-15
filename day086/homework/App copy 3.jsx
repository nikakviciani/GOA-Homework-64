import footer from "./footer";
import Header from "./header";
// 5) შექმენით ImagesBlock კომპონენტი რომელიც აბრუნებს <div> და შიგნით 2 <img> ტეგს ნებისმიერი სურათის ლინკით  
// App-ში გამოიტანეთ <ImagesBlock /> და ნახეთ როგორ მუშაობს JSX-ში img ტეგი
let ImagesBlock=<div><img src="https://via.placeholder.com/150" alt="Image 1"/><img src="https://via.placeholder.com/150" alt="Image 2"/></div>
function App() {
  return (
    <>
    <ImagesBlock/>
    </>
  );
  
}

export default App
