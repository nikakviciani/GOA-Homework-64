// clonenode ნიშნავს რომ ჩვენ შეგვიძლია დავაკლონოთ HTML ელემენტი და მისი შინაარსი. შექმენით ერთი div ელემენტი რომელზეც აქვს id="productTemplate" და შიგნით აქვს h2, p და button ელემენტები. შემდეგ JavaScript-ში გამოიყენეთ getElementById რათა ამოიღოთ ეს ელემენტი და შემდეგ გამოიყენეთ clonenode რათა შექმნათ მისი კლონი. ბოლოს დაამატეთ ეს კლონი body ელემენტში.
const productTemplate = document.getElementById("productTemplate");
const productClone = productTemplate.cloneNode(true);
document.body.appendChild(productClone);
// result`: body-ში დაემატება productTemplate-ის კლონი.
// createtextnode გამოიყენება რათა შექმნათ ახალი ტექსტური ნოდი. შექმენით ახალი პარაგრაფი და დაამატეთ მას ტექსტი "Hello, World!" createtextnode-ის გამოყენებით. შემდეგ დაამატეთ ეს პარაგრაფი body ელემენტში.
const newParagraph = document.createElement("p");
const textNode = document.createTextNode("Hello, World!");
newParagraph.appendChild(textNode);
document.body.appendChild(newParagraph);
// .insertbefore გამოიყენება რათა ჩასვათ ახალი ელემენტი კონკრეტული ელემენტის წინ. შექმენით ახალი h1 ელემენტი და ჩასვით იგი body ელემენტში პირველ ელემენტად insertBefore-ის გამოყენებით.
const newHeading = document.createElement("h1");
const headingText = document.createTextNode("Welcome to My Page");
newHeading.appendChild(headingText);
document.body.insertBefore(newHeading, document.body.firstChild);
// result`: body-ში პირველი ელემენტი იქნება ახალი h1 ელემენტი.
// removechild გამოიყენება რათა წავშალოთ კონკრეტული ელემენტი DOM-დან. შექმენით ახალი div ელემენტი და დაამატეთ იგი body-ში, შემდეგ კი წაშალეთ იგი removeChild-ის გამოყენებით.
const removableDiv = document.createElement("div");
removableDiv.id = "toBeRemoved";
document.body.appendChild(removableDiv);
document.body.removeChild(removableDiv);