// 6) შექმენით HTML ღილაკი <button id="calcBtn">Calculate</button> და პარაგრაფი <p id="calcOut"></p>. გამოიყენეთ external JS და ფუნქცია calculateSum(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt ორი რიცხვისთვის. პარაგრაფში გამოჩნდეს მათი ჯამი
document.getElementById('calcBtn').addEventListener('click', calculateSum);
function calculateSum() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    let result = "";

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
    }

    document.getElementById('calcOut').textContent = result;
}