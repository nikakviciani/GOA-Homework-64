// // clases in js
// function User(name, age) {
//     this.name = name;
//     this.age = age;}
// let user= new User("John", 30);
// // this ნიშNავს სანიშნავს ობიექტს რომელიც იქმნება new ოპერატორის მეშვეობით

// const product = {
//     productName: "Vegetable",
//     price: 25,
//     mass: 5,
//     date: "2026-07-29",
//     buyProduct: function() {
//         console.log(`${product.productName} was sold`)
//     }
// }

// console.log(product.buyProduct())


// function Task(the_task,time_to_complete,Time_to_when_need_to_do){   
//     this.the_task = the_task;
//     this.time_to_complete = time_to_complete;
//     this.Time_to_when_need_to_do = Time_to_when_need_to_do;
// }
// let task1 = new Task("JS", "2 hours", "2025-07-07");
// let task2 = new Task("HTML", "1 hour", "2026-09-31");
// let task3 = new Task("CSS", "1.5 hours", "2025-03-03");
// console.log(task1)
// console.log(task2)
// console.log(task3)


// 1) შექმენით task ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: title, desc, state, deadline, complete (მეთოდი), შექმენით მინიმუმ 3 ობიექტი და თითოეულზე გამოიძახეთ complete მეთოდი, საბოლოოდ გამოიტანეთ ყველა, კომენტარებით ახსენით რა არის ობიექტი და ჩამოწერეთ მისი 3-ვე ტიპის თვისება
function Task(title, desc, state, deadline) {
    this.title = title; // string ტიპის თვისება რომელიც აღნიშნავს დავალების კონსტრუქცისას
    this.desc = desc; // string ტიპის თვისება რომელიც აღნიშნავს დავალების აღწერას
    this.state = state; // string ტიპის თვისება რომელიც აღნიშნავს დავალების მდგომარეობას (მაგ: "pending", "completed")
    this.deadline = deadline; // string ტიპის თვისება რომელიც აღნიშნავს დავალების დასრულების ვადას(ბოლო მომენტი)
    this.complete = function() { // მეთოდი რომელიც აღნიშნავს დავალების დასრულების პროცესს
        console.log(`Task "${this.title}" is completed.`);
        this.state = "completed"; // შეცვლა დავალების მდგომარეობა დასრულებულზე
    }
}

let task1 = new Task("Learn JavaScript", "Complete the JavaScript course", "pending", "2025-07-07");
let task2 = new Task("Build a Website", "Create a personal portfolio website", "pending", "2026-09-30");
let task3 = new Task("Read a Book", "Read 'Eloquent JavaScript'", "pending", "2025-03-03");

task1.complete();
task2.complete();
task3.complete();
// complete მეთოდის გამოძახების შემდეგ, თითოეული დავალების მდგომარეობა შეიცვლება "completed"-ზე ანუ დასრულებულზე
console.log(task1);
console.log(task2);
console.log(task3);
// objectmethod() ნიშNავს ობიექტის მეთოდს რომელიც არის ობიექტის თვისება და რომელიც შეიცავს ფუნქციას და მეთოდს შეუძლია გამოიყენოს ობიექტის სხვა თვისებები და მეთოდები this საკვანძო სიტყვის მეშვეობით