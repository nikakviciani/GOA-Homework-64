// 5) შექმენით ორი HTML input <input id="valA" type="number" placeholder="Enter number A"> და <input id="valB" type="number" placeholder="Enter number B">, ღილაკი <button id="orNumBtn">Check OR Numbers</button> და <p id="orNumOut"></p>. JS-ში დაწერეთ ფუნქცია checkOrNum(), რომელიც ღილაკზე დაჭერისას შეამოწმებს თუ რომელიმე რიცხვი ნაკლებია 5-ზე და გამოიტანს შედეგს პარაგრაფში
document.getElementById('orNumBtn').onclick = function checkOrNum() {
    let valA = parseFloat(document.getElementById('valA').value);
    let valB = parseFloat(document.getElementById('valB').value);
    document.getElementById('orNumOut').innerText = (valA < 5) || (valB < 5);
}