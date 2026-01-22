import { useState, useEffect } from 'react';

// // 2) თქვენი სიტყვებით ახსენით useEffect კაუჭი.
// // აღწერეთ:
// // - რა არის გვერდითი ეფექტი (side effect) React-ში
// // - რა განსხვავებაა ჩვეულებრივ ლოგიკასა და useEffect-ში მოთავსებულ ლოგიკას შორის
// // - როდის იძახება useEffect კომპონენტის სიცოცხლის ციკლში

// // დამატებით განიხილეთ useEffect კაუჭის არგუმენტები:
// // - პირველი არგუმენტი (callback ფუნქცია) – რას აკეთებს და როდის სრულდება
// // - მეორე არგუმენტი (dependency array) – რისთვის გამოიყენება
// // - რა მოხდება თუ dependency array საერთოდ არ გადაეცემა
// // - რა მოხდება თუ dependency array ცარიელია

// // ასევე დაწერეთ თუ:
// // - რას აკეთებს useState
// // - როდის იძახება useState
// // - ჩამოწერეთ მინიმუმ 2 მაგალითი useState-ის გამოყენებაზე

// /*
// === useEffect კაუჭი ===

// გვერდითი ეფექტი (Side Effect):
// - React კომპონენტის გარეთ რაიმე მოქმედება (API ზარი, DOM მანიპულაცია, localStorage, ტაიმერი)
// - სინტაქსი: useEffect(() => { /* ეფექტი */ }, [dependencies])

// განსხვავება ჩვეულებრივ ლოგიკასა და useEffect-ში:
// - ჩვეულებრივი კოდი: გაშვება render-ის დროს (პრობლემა - უსასრულო ციკლი)
// - useEffect: გაშვება render-ის შემდეგ, კონტროლირებული დროსი

// useEffect-ის გამოძახების დრო:
// - კომპონენტის mount დროს
// - state/props ცვლილების შემდეგ
// - კომპონენტის unmount დროს (cleanup ფუნქცია)

// === useEffect არგუმენტები ===

// 1. პირველი არგუმენტი (callback):
//     - გაშვება მოხდება render-ის შემდეგ
//     - return-ით cleanup ფუნქცია (unmount დროს გაშვება)

// 2. მეორე არგუმენტი (dependency array):
//     - განსაზღვრავს რომელი ცვლილებაზე გაშვება
//     - ცვლილება dependency-ში → useEffect გაშვება

// 3. Dependency array არ გადაეცემა:
//     - useEffect გაშვება ᲧᲝᲕᲔᲚ render-ის შემდეგ (საშიში!)

// 4. Dependency array ცარიელი []:
//     - გაშვება მხოლოდ mount დროს ერთხელ

// === useState Hook ===

// რას აკეთებს:
// - კომპონენტში state დამატება
// - სინტაქსი: const [state, setState] = useState(initialValue)

// როდის იძახება:
// - კომპონენტი mount-ის დროს
// - ყოველი state update-ის შემდეგ re-render

// მაგალითი 1 - მთვლელი:
// */


// function Counter() {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//      document.title = `Count: ${count}`;
//   }, [count]); // document.title განახლება count ცვლილებაზე
  
//   return (
//      <div>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//      </div>
//   );
// }

// /*
// მაგალითი 2 - ფორმა და API ზარი:
// */

// function UserForm() {
//   const [name, setName] = useState('');
//   const [data, setData] = useState(null);
  
//   useEffect(() => {
//      // API ზარი მხოლოდ mount დროს
//      fetch('/api/data')
//         .then(res => res.json())
//         .then(result => setData(result));
//   }, []); // ცარიელი array = გაშვება მხოლოდ ერთხელ
  
//   return (
//      <input 
//         value={name} 
//         onChange={(e) => setName(e.target.value)} 
//      />
//   );
// }