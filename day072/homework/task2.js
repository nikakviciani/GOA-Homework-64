// 3) ყველა ახალ ნასწავლი მეთოდზე გააკეთეთ 2-2 მაგალითი და ახსენით კომენტარებით თქვენი სიტყვებით თუ რას აკეთებს  თითოეული მეთოდი (push,pop,unshift,shift, slice, splice)
let fruits = ["apple", "banana", "cherry"];

// push - ამ მეთოდით ვამატებთ ახალ ელემენტს მასივის ბოლოს.
fruits.push("date"); // ახლა მასივი იქნება ["apple", "banana", "cherry", "date"]    
console.log(fruits);

// pop - ამ მეთოდით ვწვდებით და ვწოვთ ბოლო ელემენტს მასივიდან.
let lastFruit = fruits.pop(); // lastFruit იქნება "date", ახლა მასივი იქნება ["apple", "banana", "cherry"]
console.log(lastFruit);
console.log(fruits);