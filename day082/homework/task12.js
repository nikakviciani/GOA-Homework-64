// 12) შექმენით numArr მასივი [1,2,3,4,5,6,7,8] გამოიყენეთ filter მეთოდი რომ მიიღოთ მხოლოდ მარტივი ანუ პრაიმ რიცხვები შემდეგ სცადეთ იგივე ამოცანა manualFilter ფუნქციით და აღწერეთ თქვენი სიტყვებით როგორ ამოწმებთ არის თუ არა რიცხვი პრაიმი

const numArr = [1, 2, 3, 4, 5, 6, 7, 8];

// Using filter method to get prime numbers
const primeNumbers = numArr.filter(isPrime);

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(primeNumbers);

// Manual filter function
function manualFilter(arr) {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    return primes;
}

const manualPrimes = manualFilter(numArr);
console.log(manualPrimes);