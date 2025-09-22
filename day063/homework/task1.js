// <!-- 2) შექმენით HTML ღილაკი <button id="nameBtn">Enter Name</button> და პარაგრაფი <p id="output"></p>. გამოიყენეთ external JS და ფუნქცია showName(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt "Enter your name". მიღებული სახელი ჩაიწეროს პარაგრაფში -->
document.getElementById("nameBtn").addEventListener("click", showName);

function showName() {
    const name = prompt("Enter your name");
    document.getElementById("output").innerText = name;
}   