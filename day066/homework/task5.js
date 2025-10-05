// 6) შექმენით HTML input <input id="ageInput" type="number" placeholder="Enter age">, ღილაკი <button id="ageBtn">Check Age</button> და <p id="ageOut"></p>. JS-ში დაწერეთ ფუნქცია checkAge(), რომელიც ღილაკზე დაჭერისას შეამოწმებს თუ ასაკი 13–17 შუალედშია (>=13 && <=17). თუ პირობა სრულდება გამოიტანოს "Teenager", წინააღმდეგ შემთხვევაში "Not Teenager"
document.getElementById('ageBtn').onclick = function checkAge() {
    let ageInput = parseFloat(document.getElementById('ageInput').value);
    if (ageInput >= 13 && ageInput <= 17) {
        document.getElementById('ageOut').innerText = "Teenager";
    } else {
        document.getElementById('ageOut').innerText = "Not Teenager";
    }
}