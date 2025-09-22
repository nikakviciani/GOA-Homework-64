// <!-- 4) შექმენით HTML ღილაკი <button id="passBtn">Enter Password</button> და პარაგრაფი <p id="passOut"></p>. გამოიყენეთ external JS და ფუნქცია getPassword(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt "Enter your password". მიღებული პაროლი ჩაიწეროს პარაგრაფში -->
document.getElementById("passBtn").addEventListener("click", getPassword);
function getPassword() {
    const password = prompt("Enter your password");
    document.getElementById("passOut").innerText = password;
}