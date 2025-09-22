// 3) შექმენით HTML input <input id="userInput" type="text" placeholder="Type here"> და ღილაკი <button id="showBtn">Show</button>. ასევე პარაგრაფი <p id="display"></p>. გამოიყენეთ external JS და ფუნქცია displayText(), რომ ღილაკზე დაჭერისას input-ში შეყვანილი ტექსტი გამოჩნდეს პარაგრაფში
document.getElementById("showBtn").addEventListener("click", displayText);
function displayText() {
    const inputText = document.getElementById("userInput").value;
    document.getElementById("display").innerText = inputText;
}
