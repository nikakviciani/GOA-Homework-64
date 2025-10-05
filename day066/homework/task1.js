// <!-- 2) შექმენით HTML checkbox-ები <input id="val1" type="checkbox"> და <input id="val2" type="checkbox">, ღილაკი <button id="orBtn">Check OR</button> და <p id="orOut"></p>. JS-ში დაწერეთ ფუნქცია checkOr(), რომელიც ღილაკზე დაჭერისას შეასრულებს || ოპერაციას ორივე checkbox-ზე და გამოიტანს შედეგს პარაგრაფში -->
document.getElementById('orBtn').onclick = function checkOr() {
    let val1 = document.getElementById('val1').checked;
    let val2 = document.getElementById('val2').checked;
    document.getElementById('orOut').innerText = val1 || val2;
}