// 3) შექმენით person ობიექტი firstName, lastName და age ველებით. გამოიყენეთ object destructuring და აიღეთ firstName და age ცალკე ცვლადებში. სცადეთ ისეთი ველის დესტრუქტურიზაცია რომელიც ობიექტში არ არსებობს და დააკვირდით მიღებულ მნიშვნელობას
const person = {
    firstName: 'Luka',
    lastName: 'Beridze',
    age: 25
};

// Object destructuring: extract firstName and age
const { firstName, age, middleName } = person;

console.log('firstName:', firstName);    // Luka
console.log('age:', age);                // 25

// middleName does not exist on person -> will be undefined
console.log('middleName:', middleName);  // undefined