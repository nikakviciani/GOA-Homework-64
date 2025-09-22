// <!-- 4) შექმენით HTML ღილაკი <button id="compBtn">Compare</button> და პარაგრაფი <p id="compOut"></p>. გამოიყენეთ external JS და ფუნქცია compareNumbers(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt ორი რიცხვისთვის. პარაგრაფში გამოჩნდეს რომელი რიცხვია უფრო დიდი -->
document.getElementById('compBtn').addEventListener('click', compareNumbers);

function compareNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    let result = "";

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else if (num1 > num2) {
        result = `${num1} is greater than ${num2}.`;
    } else if (num2 > num1) {
        result = `${num2} is greater than ${num1}.`;
    } else {
        result = "Both numbers are equal.";
    }

    document.getElementById('compOut').textContent = result;
}