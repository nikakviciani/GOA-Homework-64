// 1) ახსენით როგორ გესმით ტერმიენბი lexical scope და hoisting, დაწერეთ რა გასნხვავებაა var-ითა და let-ით შექმნილ ცვლადებს შორის მოიყვანეთ ყველაფრის მაგალითები


// var keyword არის გლობალური ცვლადი ის ყველასთვის ხელმისაწვდომია 
var globalVar = "Hello, World!";
function showGlobalVar() {
    console.log(globalVar); // გამოიტანს: Hello, World!
}
// let keyword არის ბლოკური დონეზე ცვლადი, ის ხელმისაწვდომია მხოლოდ იმ ბლოკში სადაც არის განსაზღვრული
function showBlockVar() {
    let blockVar = "Hello, Block!";
    console.log(blockVar); // გამოიტანს: Hello, Block!
}
// console.log(blockVar); // გამოიტანს შეცდომას, რადგან blockVar არ არის ხელმისაწვდომი აქ
// const keyword არის კონსტანტა, მისი მნიშვნელობა არ შეიძლება შეიცვალოს მარა ის არის გლობალური ან ბლოკური დონეზე დამოკიდებულია სად არის განსაზღვრული
const constantVar = "I am constant block!";
function showConstantVar() {
    console.log(constantVar); // გამოიტანს: 'I am constant block!'
}
// ჯავასკრიპტში ყველა კოდის ბლოკში,ყველა სქრიპტში და ფუნქციაში არის თავისი ლექსიკური გარემო (lexical environment) სადაც ცვლადები და ფუნქციები ინახება და იქედან ხდება მათი მოძებნა და გამოყენება.
showGlobalVar();
showBlockVar();
showConstantVar();
// აქედან მხოლოდ წვდომა გვაქვს მხოლოდ globalVar-სთვის და constantVar-სთვის, blockVar არ არის ხელმისაწვდომი აქ
// lexical scope განსაზღვრავს როგორ და სად ხდება ცვლადების და ფუნქციების მოძებნა და გამოყენება ჯავასკრიპტში.
// hoisting ნიშნავს ცვლადების და ფუნქციების დეკლარაციების კოდის ზედა ნაწილში მათი გამოყენებამდე.