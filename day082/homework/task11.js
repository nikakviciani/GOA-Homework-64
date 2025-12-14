// 11) შექმენით names მასივი ['John','Jane','Mike','Anna'] გამოიყენეთ map რომ მიიღოთ ახალი მასივი სადაც თითოეული ელემენტის მნიშვნელობა არის სახელის სიგრძე შემდეგ იგივე გააკეთეთ manualMap ფუნქციით ბოლოს გამოიყენეთ reduce ან manualReduce რომ იპოვოთ ყველა სიგრძის ჯამი და ახსენით როგორ იცვლება acc თითო იტერაციაზე

const names = ['John', 'Jane', 'Mike', 'Anna'];

// Using map to create an array of name lengths
const lengths = names.map(name => name.length);

// Manual map function
function manualMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

const manualLengths = manualMap(names, name => name.length);

// Using reduce to find the sum of lengths
const totalLength = lengths.reduce((acc, length) => acc + length, 0);

// Explanation of acc changes
// In each iteration, acc starts with the initial value (0) and adds the current length to it.
// For example:
// Iteration 1: acc = 0 + 4 (length of 'John') => acc = 4
// Iteration 2: acc = 4 + 4 (length of 'Jane') => acc = 8
// Iteration 3: acc = 8 + 4 (length of 'Mike') => acc = 12
// Iteration 4: acc = 12 + 4 (length of 'Anna') => acc = 16