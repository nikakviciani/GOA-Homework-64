// 6) შექმენით numSet Set რიცხვების სიიდან [1,2,2,3,4,4,5,6] დააბრუნეთ უნიკალური რიცხვების ჯამი for of ციკლით acc+= ელემენტი

const numSet = new Set([1, 2, 2, 3, 4, 4, 5, 6]);
let acc = 0;
for (const num of numSet) {
    acc += num;
}
console.log(acc);