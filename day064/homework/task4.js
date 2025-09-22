// 5) შექმენით HTML input <input id="wordInput" type="text" placeholder="Enter word"> და ღილაკი <button id="lengthBtn">Check Length</button>. ასევე პარაგრაფი <p id="wordOut"></p>. გამოიყენეთ external JS და ფუნქცია checkLength(), რომ ღილაკზე დაჭერისას გამოჩნდეს შეყვანილი სიტყვის სიმბოლოთა რაოდენობა
document.getElementById('lengthBtn').onclick = checkLength;

function checkLength() {
    let word = document.getElementById('wordInput').value;
    let length = word.length;
    document.getElementById('wordOut').innerText = `The word "${word}" has ${length} characters.`;
}