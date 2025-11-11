// 2) ახსენით რა არის პრიმიტიული და კომპლექსური მონაცემთა ტიპები, stack & heap მეხსიერება, მოიყვანეთ მაგალითები და გააკეთეთ ნახაზი
// პრიმიტიული და კომპლექსური მონაცემთა ტიპების შესახებ.
// stack & heap მეხსიერების შესახებ.
// stack ნიშნავს მეხსიერების ნაწილს, სადაც ინახება პრიმიტიული ტიპის მონაცემები (მაგალითად: number, string, boolean, null, undefined, symbol, bigint).
// heap ნიშნავს მეხსიერების ნაწილს, სადაც ინახება კომპლექსური ტიპის მონაცემები (მაგალითად: object, array, function).
// მაგალითები:

// პრიმიტიული ტიპის მონაცემები (stack):
let num = 42; // number
let str = "Hello, World!"; // string
let bool = true; // boolean
let n = null; // null
let u; // undefined
let sym = Symbol("id"); // symbol
// heap:
let obj = { name: "John", age: 30 }; // object
let arr = [1, 2, 3, 4, 5]; // array
function greet() {
  console.log("Hello!");
} // function   