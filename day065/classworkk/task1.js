
// 1)  შექმენით 3 ობიექტი: მებრძოლის, პროდუქტის და პიროვნების. თითეულში უნდა იყოს მინიუმუმ 3 კუთვნილება და 1 მეთოდი, კომენტარებით დაწერეთ რა არის ობიექტი, როგორ იქმება და რაში ვიყენებთ. ასევე ახსენით თქვენი სიტყვებით docment-ის ობიექტი

const archer = {
    attack_distance: 100,
    attack_damage: 15,
    arrows: 45,
    name: "robin hood",
    opponent: "sheriff",
    function() {
        console.log(`${this.name} attacks ${this.opponent} from a distance of ${this.attack_distance} with damage of ${this.attack_damage} and has ${this.arrows}`);
    }
}
const product = {
    name: "laptop",
    price: 1500,
    brand: "asus",
    procesor: 'intel ultra 9',
    function() {
        console.log(`this product is ${this.name} from ${this.brand} with price ${this.price}$ and procesor ${this.procesor}`);
    }
}
const person = {
    name: "John",
    age: 30,
    occupation: "Engineer",
    function() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.occupation}.`);
    }
}