// 3) შექმენით HTML input <input id="numInput" type="number" placeholder="Enter number"> და ღილაკი <button id="doubleBtn">Double</button>. ასევე პარაგრაფი <p id="numOut"></p>. გამოიყენეთ external JS და ფუნქცია doubleNumber(), რომ ღილაკზე დაჭერისას შეყვანილი რიცხვი ორჯერ გაზრდილი გამოჩნდეს პარაგრაფში
document.getElementById('doubleBtn').onclick = doubleNumber;

function doubleNumber() {
    let num = document.getElementById('numInput').value;
    let doubled = num * 2;
    document.getElementById('numOut').innerText = doubled;
}