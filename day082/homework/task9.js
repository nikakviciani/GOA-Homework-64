// 9) შექმენით manualMap ფუნქცია რომელიც იღებს მასივს და callback ფუნქციას და აბრუნებს ახალ მასივს გამოიყენეთ ეს manualMap numbersArr მასივზე რომ შექმნათ ახალი მასივი სადაც ყველა რიცხვი გაორმაგებულია შემდეგ იგივე გააკეთეთ ჩაშენებული map მეთოდით და შეადარეთ მიღებული შედეგები

function manualMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

const numbersArr = [1, 2, 3, 4, 5];
const doubledManual = manualMap(numbersArr, num => num * 2);
console.log(doubledManual);

const doubledBuiltIn = numbersArr.map(num => num * 2);
console.log(doubledBuiltIn);