// 14) შექმენით products მასივი name და price ველებით გაფილტრეთ მხოლოდ იაფი პროდუქტები filter ით
let products = [
    {name: "laptop", price: 1000},
    {name: "phone", price: 500},
    {name: "tablet", price: 300}
];

const cheapProducts = products.filter(product => product.price < 500);
console.log(cheapProducts);

// 15) შექმენით books მასივი title და author ველებით გამოიყენეთ map რომ მიიღოთ სტრინგები ფორმატში "Title by Author"
let books = [
    {title: "1984", author: "George Orwell"},
    {title: "To Kill a Mockingbird", author: "Harper Lee"},
    {title: "The Great Gatsby", author: "J.R.R. Tolkien"}
];

const bookStrings = books.map(book => `${book.title} by ${book.author}`);
console.log(bookStrings);

// 16) გაფილტრეთ people მასივი ასაკის მიხედვით 18 ზე ნაკლები და 18 ან მეტი filter ით
let people = [
    {name: "luka", age: 15},
    {name: "ana", age: 20},
    {name: "giorgi", age: 17}
];

const under18 = people.filter(person => person.age < 18);
const over18 = people.filter(person => person.age >= 18);
console.log(under18);
console.log(over18);

// 17) შექმენით numArr და ჯერ გაფილტრეთ 50 ზე მეტი რიცხვები შემდეგ გაანახევრეთ ისინი map ით
let numArr = [10, 20, 30, 40, 50, 60, 70];
const filteredNums = numArr.filter(num => num > 50);
const doubledNums = filteredNums.map(num => num * 2);
console.log(doubledNums);

// 18) შექმენით words მასივი და forEach ით დაითვალეთ თითო სიტყვა რამდენჯერ გვხვდება ობიექტში

let words = ["apple", "banana", "apple", "cherry", "banana"];
let wordCount = {};
words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
});
console.log(wordCount);