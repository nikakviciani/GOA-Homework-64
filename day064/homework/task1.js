// 2) შექმენით HTML ღილაკი <button id="cityBtn">Enter City</button> და პარაგრაფი <p id="cityOut"></p>. გამოიყენეთ external JS და ფუნქცია getCity(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt "Enter your city". მიღებული ქალაქი ჩაიწეროს პარაგრაფში
document.getElementById('cityBtn').onclick = getCity;

function getCity() {
    let city = prompt("Enter your city");
    document.getElementById('cityOut').innerText = city;
}