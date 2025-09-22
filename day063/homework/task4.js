// 5) შექმენით HTML input <input id="ageInput" type="number" placeholder="Enter age"> და ღილაკი <button id="ageBtn">Show Age</button>. ასევე პარაგრაფი <p id="ageOut"></p>. გამოიყენეთ external JS და ფუნქცია showAge(), რომ ღილაკზე დაჭერისას input-ში შეყვანილი ასაკი გამოჩნდეს პარაგრაფში
document.getElementById("ageBtn").addEventListener("click", showAge);
function showAge() {
    const age = document.getElementById("ageInput").value;
    document.getElementById("ageOut").innerText = age;
}
