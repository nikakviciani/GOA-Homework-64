promise=fetch('7iyvjs')

promise.then((response)=>{
    if(response.ok){
        return response.json()
    } else{
        throw new Error('network response was not ok')
    }
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.error('there has been a problem with your fetch operation:',error);
})

// fetch() არის ვებ API რომელიც გამოიყენება ქსელური მოთხოვნების (network requests) შესასრულებლად. ის აბრუნებს Promise ობიექტს, რომელიც განახლებულ ინფორმაციას შეიცავს მოთხოვნის შედეგის შესახებ. fetch ფუნქცია იღებს URL-ს როგორც პირველ პარამეტრს და დამატებით პარამეტრებს, როგორიცაა მეთოდი (GET, POST და ა.შ.), ჰედერები და სხეული (body) მოთხოვნის ტიპის მიხედვით.
// Response ობიექტი წარმოადგენს პასუხს ქსელური მოთხოვნის (network request) შედეგად. ის შეიცავს ინფორმაციას, როგორიცაა სტატუსი (status), ჰედერები (headers) და სხეული (body) პასუხის ტიპის მიხედვით. Response ობიექტი გამოიყენება fetch ფუნქციის მიერ დაბრუნებული Promise-ის შედეგის დამუშავებისთვის.
//.then
// .catch მეთოდები გამოიყენება Promise ობიექტებთან მუშაობისას. .then მეთოდი გამოიყენება წარმატებული ოპერაციის შედეგის დამუშავებისთვის, ხოლო .catch მეთოდი გამოიყენება შეცდომების ან წარუმატებლობის შემთხვევაში. ისინი საშუალებას გვაძლევენ დავამატოთ ფუნქციები, რომლებიც შესრულდება შესაბამისი შემთხვევების დროს.

// let namesMap = new Map(
//     [
//         ["Luka", 4],
//         [true, 5],
//         [5, 3]
//     ]
// )

// namesMap.delete("Luka")
// namesMap.set("Giorgi", true)
// namesMap.has(true)
// namesMap.get("Luka")
// // namesMap.clear()
// console.log(namesMap.keys())
// console.log(namesMap.values())
// console.log(namesMap.entries())

// console.log(namesMap)

// let mySet = new Set([2, 235,2, 5, 5])
// mySet.add(7)
// mySet.delete(2)
// console.log(mySet.has(235))
// mySet.clear()
// console.log(mySet.size)
// console.log(mySet.values())
// console.log(mySet)

// javascript runs 1 thread


// promise აქვს 3 მდგომარეობა
// თავიდან ყოველთის არის pending
// გარკვეული დროის შემდეგ შეიძლება promise ობიექტის 
// წარმატებით დასრუელბა -> resolve 
// ან წარუმატებლობა -> reject

// try {
//     let promise = new Promise((resolve, reject) => {
//     let internetRequest = true;
    
//     setTimeout(() => {
//         if(internetRequest === true) {
//             resolve("Promise sucess")
//         } else {
//             reject("Rejected, failed")
//         }
//     }, 3000);
// })
// } catch {
//     console.log("Error promise rejected")
// }


// setInterval(() => {
//     console.log(promise)
// }, 500)


// let promise = new Promise((resolve, reject) => {
//     let a = 1
//     setTimeout(() => {
//         if(a == 1) {
//             resolve("Message success")
//         } else {
//             reject("message fails")
//         }
//     }, 2000);
// })

// promise
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error))


// api-იდან ვითხოვ ინფორმაციას fetch ფუნქციის მეშვეობით
// ამ პროცესს დრო სჭირდება და იქმნება promise ობიექტი ავტომატურად
// let promise = fetch("https://jsonplaceholder.typicode.com/todos")

// promise
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

// json ინფრომაციას მოითხოვს

// 3) მოცემული api-დან fetch-ის, promise, try, catch მეშვეობით წამოიღეთ ინფორმაცია და გამოიტანეთ კონსოლში
// // https://jsonplaceholder.typicode.com/todos
(async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) throw new Error('Network response was not ok: ' + response.status);
        const todos = await response.json();
        console.log(todos);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
})();
