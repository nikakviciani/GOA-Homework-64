// 7) შექმენით fruits მასივი ['apple','banana','orange'] გამოიყენეთ forEach რომ console.log ში დაბეჭდოთ თითოეული ხილი დიდი ასოებით შემდეგ იგივე შედეგის მისაღებად გამოიყენეთ manualForEach და კომენტარებით ახსენით რა მნიშვნელობები გადაეცემა callback ფუნქციას თითო იტერაციაზე

const fruits = ['apple', 'banana', 'orange'];

// Using forEach to log each fruit in uppercase
fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});

// Manual forEach implementation
function manualForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        // i is the index, array[i] is the current element
        callback(array[i], i, array);
    }
}

// Using manualForEach to log each fruit in uppercase
manualForEach(fruits, function(fruit) {
    console.log(fruit.toUpperCase());
});