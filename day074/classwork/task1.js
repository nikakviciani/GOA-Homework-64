// children ფუნქცია იღებს ერთ არგუმენტს - ელემენტს და აბრუნებს ამ ელემენტის ყველა შვილ ელემენტს (ტექსტური ნოდები არ ითვლება).
document.body.children; // HTMLCollection
document.body.children[0]; // პირველი შვილ ელემენტი
document.body.children.length; // შვილ ელემენტების რაოდენობა ან
document.body.childElementCount;
// ყველაობიექტის შედგება სამითვისებისგან 1.კუთნილება 2.მეთოდი 3.მოვლენა
// dom ნიშნავს document object model
// container ნიშნავს კონტეინერს, შემნახველს
// .lastna

// <!-- 1) შექმენით 3 product კლასის მქონე div ელემენტი, პირველ ელემენტს მიანიჭეთ ასევე გასნხვავბული id და ჩაწერეთ მასში 2 თქვენთვის სასურველი ელემენტი, შემდეგ გამოიყეენთ ყველა ეს document-ის მეთოდი: getElementsByTagName, getElementsByClassName, previousElementSibling, nextgElementSibling, firstChild, lastChild და კომენტარებით ახსენით როგორ მუშაობს თითოეული, ასევე დაწერეთ თუ რა არის DOM -->


// getElementbyclassname - აბრუნებს ელემენტის კლასის სახელს
// getElementsByTagName - აბრუნებს ელემენტების კოლექციას, რომლებიც შეესაბამება მითითებულ ტეგის სახელს
// firstElementChild - აბრუნებს პირველ შვილ ელემენტს
// lastElementChild - აბრუნებს ბოლო შვილ ელემენტს
// firstElementChild და lastElementChild არ ითვლის ტექსტურ ნოდებს
// ყველაობიექტის შედგება სამითვისებისგან 1.კუთნილება 2.მეთოდი 3.მოვლენა
// dom ნიშნავს document object model
// container ნიშნავს კონტეინერს, შემნახველს
const products = document.getElementsByClassName("product"); //  ყველა ელემენტი რომელსაც აქვს product კლასი
console.log(products); 
console.log(products.length); // ელემენტების რაოდენობა ან
console.log(products[0]); // პირველი ელემენტი