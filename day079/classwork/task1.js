// .hasnodechildren
let container = document.getElementById("tt");
let hasChildren = container.hasChildNodes();
console.log(hasChildren); // თუ დივში არის რამე ელემენტი, ბრუნდება true, წინააღმდეგ შემთხვევაში false
// .mouseover =hover in addiventlistener()
// ToString(),ToInt(),ToFloat()
let mm='hello'
let num=123;

function tea(){
    let aa=11
}; 
// => arrow function საჭიროა იმისთვის რომ ფუნქციის შიგნით this მიუთითებდეს იმ ობიექტზე რომელზეც ფუნქციაა გამოძახებული
// .charAt() - აბრუნებს სიმბოლოს ინდექსის მიხედვით
let str = "Hello, World!";
// hosting ნიშნავს რომ ფუნქციების და ცვლადების დეკლარაცია ხდება სკრიპტის შესრულებამდე
// .replace() - ცვლის ტექსტს
let text = "Hello, World!";

// 1) დაწერეთ რა არის ES6, მოიყვანეთ თითოეული მისი დამატებული ფუნქციონალის მაგალითი და აღწერეთ

// ცვლადები
// string
// for loop
// arrow function

// es6 არის JavaScript-ის მეექვსე ვერსია, რომელიც მოიცავს ახალ ფუნქციებს და სინტაქსურ გაუმჯობესებებს(ოპტიმიზაციასაც)
// მასში დამატდა
// let და const ცვლადების დეკლარაცია
let age = 25;
const name = "John";//მუდმივი სტრინგი
// for და loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// arrow function (=>)
const add = (a, b) => a + b;
console.log(add(2, 3)); // მათი ჯამი