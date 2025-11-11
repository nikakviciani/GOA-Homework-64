// 4) გააკეთეთ 3-3 მაგალითი თითოეულ მეთოდზე და ახსენით თქვენი სიტყვებით  თუ რას აკეთებს ეს მეთოდები (indexOf, lastIndexOf, includes)
let colors = ["red", "green", "blue", "green", "yellow"];

// indexOf - ამ მეთოდით ვიპოვით ელემენტის პირველივე ინდექსს მასივში.
let firstGreenIndex = colors.indexOf("green"); // firstGreenIndex იქნება 1
console.log(firstGreenIndex); // 1          
// lastIndexOf - ამ მეთოდით ვიპოვით ელემენტის ბოლო ინდექსს მასივში.
let lastGreenIndex = colors.lastIndexOf("green"); // lastGreenIndex იქნება 3
console.log(lastGreenIndex); // 3
// includes - ამ მეთოდით ვამოწმებთ, თუ ელემენტი არსებობს მასივში.
let hasBlue = colors.includes("blue"); // hasBlue იქნება true
console.log(hasBlue); // true