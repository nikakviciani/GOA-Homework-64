// 3) შექმენით ფუნქცია sumAll რომელიც იღებს ნებისმიერ რაოდენობის რიცხვს rest ოპერატორის გამოყენებით შემდეგ დაითვალეთ ამ რიცხვების ჯამი და დააბრუნეთ შედეგი მაგალითზე გამოიძახეთ ფუნქცია სხვადასხვა რაოდენობის არგუმენტით და კომენტარებით ახსენით რას აკეთებს rest ოპერატორი

function sumAll(...numbers) {
    // The rest operator (...) allows us to represent an indefinite number of arguments as an array.
    // Here, 'numbers' will be an array containing all the arguments passed to the function.
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Example calls to the function with different numbers of arguments
console.log(sumAll(1, 2, 3)); // Outputs: 6
console.log(sumAll(5, 10, 15, 20)); // Outputs: 50
console.log(sumAll(1, 2, 3, 4, 5, 6)); // Outputs: 21