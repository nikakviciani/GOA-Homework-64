// 8) გამოიყენეთ numbersArr მასივი და reduce მეთოდი რომ იპოვოთ ყველა რიცხვის ჯამი და ნამრავლი გამოიყენეთ საწყისი მნიშვნელობა მაგალითად 0 ან 1 შემდეგ იგივე ოპერაციები შეასრულეთ manualReduce ფუნქციით და თქვენი სიტყვებით ახსენით რას ცვლის საწყისი მნიშვნელობა ჯამისა და ნამრავლის დათვლის პროცესში

const numbersArr = [1, 2, 3, 4, 5];

// Using reduce method for sum
const sum = numbersArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Using reduce method for product
const product = numbersArr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

// Manual reduce function
function manualReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

// Manual sum
const manualSum = manualReduce(numbersArr, (acc, curr) => acc + curr, 0);

// Manual product
const manualProduct = manualReduce(numbersArr, (acc, curr) => acc * curr, 1);

// Explanation
// The initial value for sum (0) means that adding any number will start from zero.
// For product (1), it means multiplying any number will start from one, as multiplying by zero would result in zero.