// 5) შექმენით users Map სადაც key იქნება userId ხოლო value იქნება userName დაამატეთ მინიმუმ 4 user map.keys და map.values მეთოდებით გამოიტანეთ მხოლოდ id ები და მხოლოდ სახელები საბოლოოდ map.entries გამოიყენეთ რომ ნახოთ წყვილები

const users = new Map();

users.set(1, 'Alice');
users.set(2, 'Bob');
users.set(3, 'Charlie');
users.set(4, 'Diana');

console.log('User IDs:');
console.log(users.keys());

console.log('User Names:');
console.log(users.values());

console.log('User Entries:');
console.log(users.entries());