// array()
// basic array methods
// push(), pop(), shift(), unshift(), splice(), slice(), indexOf(), includes(), join(), reverse(), sort()
let arr = [1, 2, 3, 4, 5];
arr.push(6); // add to end
arr.pop(); // remove from end
arr.shift(); // remove from start
arr.unshift(0); // add to start
arr.splice(2, 1); // remove from index 2
let newArr = arr.slice(1, 4); // copy from index 1 to 4 (not including 4)
let index = arr.indexOf(3); // find index of 3
let includes = arr.includes(3); // check if 3 is in array
let str = arr.join(", "); // join array to string
arr.reverse(); // reverse array
arr.sort((a, b) => a - b);  // sort array in ascending order





// 3) შექმენით რიცხვების მასივსი და გამოიყენეთ მომცეული მეთოდებიდან ყველა თან ახსენით როგორ მუშაობენ
// pop
// shift
// unshift
// slice
// splice
// indefOf
// lastIndexOf
// includes
// find
// findIndex
let numbers = [10, 20, 30, 40, 50];
// pop(): წაშლის ბოლო ელემენტს და აბრუნებს მას
let popped = numbers.pop(); // 50
// shift(): წაშლის პირველ ელემენტს და აბრუნებს მას
let shifted = numbers.shift(); // 10
// unshift(): ამატებს ელემენტს დასაწყისში და აბრუნებს ახალ სიგრძეს
let newLength = numbers.unshift(5); // [5, 20, 30, 40]
// slice(): აბრუნებს მასივის ნაწილის ასლს
let sliced = numbers.slice(1, 3); // [20, 30]
// splice(): ცვლის მასივს ელემენტების წაშლით ან დამატებით
let spliced = numbers.splice(2, 1, 25); // წაშლის 30-ს, ჩასვამს 25-ს ინდექსზე 2
// indexOf(): აბრუნებს პირველი შესაბამისი მნიშვნელობის ინდექსს, ან -1-ს თუ ვერ იპოვა
let idx = numbers.indexOf(25); // 2
// lastIndexOf(): აბრუნებს ბოლო შესაბამისი მნიშვნელობის ინდექსს, ან -1-ს თუ ვერ იპოვა
numbers.push(20);
let lastIdx = numbers.lastIndexOf(20); // 4
// includes(): ამოწმებს შეიცავს თუ არა მასივი მნიშვნელობას
let has40 = numbers.includes(40); // true
// find(): აბრუნებს პირველ ელემენტს რომელიც აკმაყოფილებს პირობას
let found = numbers.find(num => num > 20); // 25
// findIndex(): აბრუნებს პირველი შესაბამისი ელემენტის ინდექსს პირობის მიხედვით
let foundIdx = numbers.findIndex(num => num > 20); // 2


```
// literal გზით შექმნილი ობიექტი
// const Lua = {
//     name: "Lua",
//     dynamic: true,
//     type: 'Interperted'
// }

// function Language(name, dynamic, type) {
//     this.name = name;
//     this.dynamic = dynamic;
//     this.type = type;
// }

// constructor-ის დახმარებით შექმნილი ობიექტები
// const c = new Language('C', false, 'Compiled')
// const js = new Language('Javascript', true, 'Interpreted')


// let myNumber = 15;

// let NewNumber = myNumber;

// myNumber = 20;

// let person = {
//     firstName: "James",
//     gender: "Male"
// }

// let newPerson = person;
// newPerson.firstName = "Mark"

// console.log(person)

// primitive (პრიმიტიული) მნიშვნელობებია: number, string, boolean
// complex (კომპლექსური) მნიშვნელობებია: function, object, array

// memory leak - მეხსირების გაჟონვ

// function doTask() {
//     doTask()
// }

// doTask()

// javascript-ს აქვს მეხსირების garabage collection სისტემა
// აქვს მეხსირების management

// function numData(num, even) {
//     this.number = num,
//     this.even = even
// }

// let numberObjects = [];

// for(let i = 0; i < 10; i++) {
//     let even = i % 2 === 0;
//     const newObject = new numData(i, even)
//     numberObjects.push(newObject);
// };

// console.log(numberObjects)

// let num1 = 5;
// let num2 = 10;
// let num3 = 15;
// let num4 = 20;

// პირდაპირი გზა მასივის შესაქმნელად - literally
let numbers = [5, 10, 15, 20];
// // index      0   1   2    3

// function Array() {

// }

// console.dir([])

// ობიექტის კონსტრუქტორის მეშვეობით მასივის შექმნა - constructor
// let numbersArr = new Array(1, 2, 3, 4, 5, "Luka", false)

// numbersArr[1] = "two";
// console.log(numbersArr[20])

// let newArr = new Array();

// manually - ხელით ელემენტების დამატება

// newArr[0] = "JS"
// newArr[1] = "Java"
// newArr[2] = "SQL"
// newArr[3] = "PHP"
// console.log(newArr)

// let Arr = {
//     0: 5,
//     1: 6,
//     2: 7,
// }

// console.dir([])

// let namesArr = ["Luka", "Nika", "Giorgi", "Tarieli", "Miriani", "Nika", "Tornike", "Vako", "Lazare", "Demetre"];

// console.log(namesArr.length) // სიგრძეს
// console.log(namesArr.at(3)) // ელემენტს მოცემულ ინდექსზე
// namesArr.pop() // 
// namesArr.shift(namesArr)
// namesArr.unshift("Erekle")

// let someNames = namesArr.slice(2, 6)
// console.log(someNames)

// // namesArr.splice(2, 5)

// console.log(namesArr.indexOf("Miriani"))
// console.log(namesArr.lastIndexOf("Nika"))
// console.log(namesArr.includes("Tamazi"))
// console.log(namesArr.find(function(value, index, array) {
//     return value === "Giorgi"
// }))

// console.log(namesArr.indexOf(function(value, index, array) {
//     return value === "Giorgi"
// }))

// console.log(namesArr)
// // unshift

// pop
// shift
// unshift
// slice
// splice
// indefOf
// lastIndexOf
// includes
// find
// findIndex
```