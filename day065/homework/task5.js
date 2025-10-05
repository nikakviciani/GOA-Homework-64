// <!-- 5) შექმენით HTML input <input id="wordInput" type="text" placeholder="Enter word"> და ღილაკი <button id="reverseBtn">Reverse</button>. <p id="wordOut"></p>. JS-ში დაწერეთ ფუნქცია reverseWord(), რომელიც შეყვანილ სიტყვას გამოყოფს უკუღმა პარაგრაფში -->

document.getElementById('reverseBtn').onclick = reverseWord;

function reverseWord() {
let word = document.getElementById('wordInput').value;
let reversed = word.split('').reverse().join('');
document.getElementById('wordOut').textContent = reversed;
}
