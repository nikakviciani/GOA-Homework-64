// 5) შექმენით myArr მასივი ["AB","CD","ED"] გამოიყენეთ map მეთოდი რომ დააბრუნოთ ახალი მასივი სადაც თითოეულ ელემენტს ბოლოში ემატება თავისი ინდექსი მაგალითად "AB#0" შემდეგ იგივე შედეგი მიიღეთ თქვენი manualMap ფუნქციის გამოყენებით და კომენტარებში ახსენით callback ის სამი პარამეტრი value index და arr

const myArr = ["AB", "CD", "ED"];

// Using map method
const mappedArr = myArr.map((value, index, arr) => {
    return `${value}#${index}`;
});

console.log(mappedArr);

// Manual map function
function manualMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

const manualMappedArr = manualMap(myArr, (value, index, arr) => {
    return `${value}#${index}`;
});

console.log(manualMappedArr);

/*
Callback parameters:
- value: the current element being processed in the array.
- index: the index of the current element being processed.
- arr: the array map was called upon.
*/