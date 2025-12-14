// 3) შექმენით mySet Set რომელიც შეიცავს გამეორებულ რიცხვებს შემდეგ გამოიყენეთ size add და delete რომ დაამატოთ ახალი ელემენტი წაშალოთ ძველი და გამოიტანოთ საბოლოო ზომა size

let mySet = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log("საწყისი ზომა:", mySet.size);

mySet.add(6);
console.log("დამატების შემდეგ ზომა:", mySet.size);

mySet.delete(2);
console.log("წაშლის შემდეგ ზომა:", mySet.size);