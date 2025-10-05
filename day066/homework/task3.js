// 4) შექმენით ორი HTML input <input id="num1" type="number" placeholder="Enter number 1"> და <input id="num2" type="number" placeholder="Enter number 2">, ღილაკი <button id="andBtn">Check AND</button> და <p id="andOut"></p>. JS-ში დაწერეთ ფუნქცია checkAnd(), რომელიც ღილაკზე დაჭერისას შეამოწმებს თუ ორივე რიცხვი მეტია 10-ზე && ოპერაციით და გამოიტანს შედეგს პარაგრაფში
document.getElementById('andBtn').onclick = function checkAnd() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('andOut').innerText = (num1 > 10) && (num2 > 10);
}