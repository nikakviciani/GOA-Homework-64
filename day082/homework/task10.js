// 10) გამოიყენეთ manualReduce ფუნქცია რომ იპოვოთ numbersArr მასივის მაქსიმალური ელემენტი callback ში შეადარეთ acc და cur და ყოველთვის შეინახეთ უფრო დიდი მნიშვნელობა იგივე ამოცანა შეასრულეთ ჩაშენებული reduce მეთოდით და დაადასტურეთ რომ ორივე შედეგი ემთხვევა

const numbersArr = [3, 5, 7, 2, 8];

function manualReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

const maxManual = manualReduce(numbersArr, (acc, cur) => Math.max(acc, cur), undefined);
const maxBuiltIn = numbersArr.reduce((acc, cur) => Math.max(acc, cur), undefined);

console.log(maxManual); // Output: 8
console.log(maxBuiltIn); // Output: 8
console.log(maxManual === maxBuiltIn); // Output: true