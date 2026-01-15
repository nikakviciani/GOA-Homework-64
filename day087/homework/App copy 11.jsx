import footer from "./footer";
import Header from "./header";
import Card from "./card";
import Info from "./info";
import ListRender from "./listRender";
// 13) ყველა კომპონენტში დაამატეთ კომენტარები, სადაც ახსნით:  

// რა არის კომპონენტი
// რას აკეთებს return
// როგორ მუშაობს JSX
// JavaScript JSX-ში
// className vs class
// Event handling JSX-ში

// კომპონენტი არის React-ის ძირითადი ბლოკი, რომელიც გამოიყენება UI-ის შექმნისთვის.

// return ფუნქცია განსაზღვრავს, რა უნდა გამოიტანოს კომპონენტმა ეკრანზე.

// JSX არის სინტაქსი, რომელიც საშუალებას აძლევს JavaScript-ში HTML-ის მსგავსი სტრუქტურების გამოყენებას.

// JavaScript JSX-ში საშუალებას აძლევს გამოიყენოთ JavaScript-ის გამოხმაურებები და ლოგიკა HTML-ის მსგავს სტრუქტურებში.

// className გამოიყენება CSS კლასების დასახელებისთვის JSX-ში, რადგან class არის JavaScript-ის რეზერვირებული სიტყვა.

// Event handling JSX-ში საშუალებას აძლევს დაამატოთ ინტერაქტივობა კომპონენტებს, მაგალითად, ღილაკზე დაჭერისას.
function App() {
  return (
    <>
    <ListRender/>
    </>
  );
  
}

export default App
