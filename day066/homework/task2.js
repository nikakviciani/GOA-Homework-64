// 3) შექმენით HTML checkbox <input id="notVal" type="checkbox">, ღილაკი <button id="notBtn">Check NOT</button> და <p id="notOut"></p>. JS-ში დაწერეთ ფუნქცია checkNot(), რომელიც ღილაკზე დაჭერისას შეასრულებს ! ოპერაციას checkbox-ზე და გამოიტანს შედეგს პარაგრაფში
document.getElementById('notBtn').onclick = function checkNot() {
    let notVal = document.getElementById('notVal').checked;
    document.getElementById('notOut').innerText = !notVal;
}