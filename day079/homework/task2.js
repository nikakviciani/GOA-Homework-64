// 3) შექმენით სამი ცვლადი var, let და const გამოყენებით. var-ით შექმენით მომხმარებლის სახელი, let-ით ასაკი და const-ით ქვეყანა. კომენტარებით ახსენით რა განსხვავებაა var let const შორის და რატომ ვერ ვცვლით const-ს. დაბეჭდეთ ყველა მნიშვნელობა template string-ით: `My name is ${name}, I am ${age}, I live in ${country}
let name = 'nika'// let არა გლობალური ცვლადია და მისი მნიშვნელობა შეგვიძლია შევცვალოთ
const country = 'georgia'// const-ის მნიშვნელობა არ შეგვიძლია შევცვალოთ რადგან ის კონსტანტია
var age = 15// var არის გლობალური ცვლადი და მისი მნიშვნელობა შეგვიძლია შევცვალოთ
console.log(`My name is ${name}, I am ${age}, I live in ${country}`);