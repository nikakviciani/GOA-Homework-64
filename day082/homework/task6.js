// 6) მოცემული გაქვთ numbersArr = [12,15,17,12,15,36,23,6,2,6] გამოიყენეთ filter მეთოდი რომ მიიღოთ მხოლოდ ლუწი რიცხვები შემდეგ იგივე ლუწი რიცხვების გაფილტვრა გააკეთეთ manualFilter ფუნქციით და ახსენით რა ხდება ნაბიჯ ნაბიჯ თქვენი სიტყვებით

const numbersArr = [12, 15, 17, 12, 15, 36, 23, 6, 2, 6];

// Using filter method to get only even numbers
const evenNumbers = numbersArr.filter(num => num % 2 === 0);
console.log('Even numbers using filter:', evenNumbers);

// Manual filter function
function manualFilter(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

const evenNumbersManual = manualFilter(numbersArr);
console.log('Even numbers using manualFilter:', evenNumbersManual);