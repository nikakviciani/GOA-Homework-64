// function() უსახელო ფუნქციაა
// () => ეს არის arrow function
// 1) შექმენით სახელისა და პაროლის შესტანი ველი და დამადასტურებელი ღილაკი. როდესაც ღილაკზე მოხდება დაჭერა (გამოიყენეთ onclick ატრიბუტი external javascript-ში) წამოიღეთ მომხარებლის სახელი და და პაროლი, გააერთიანეთ ისინი და გამოიტანეთ კონსოლში, კომენტარებით ახსენით კოდის ყველაა ნაწილს, ასევ დაიცავით საუკეთესო პრაქტიკები
// მივიღოთ რეფერენსები(ცვლადები) ინფუტ ველებზე და ღილაკზე მათი ID-ებით
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

// ფუნქცია ღილაკზე დაჭერისას
function handleLogin() {
    // წამოვიღოთ მომხარებლის მიერ შეყვანილი მნიშვნელობები
    const username = usernameInput.value;
    const password = passwordInput.value;

    // გავაერთიანოთ სახელი და პაროლი
    const combined = username + ' ' + password;

    // გამოვიტანოთ გაერთიანებული სტრინგი კონსოლში
    console.log('Combined username and password:', combined);
}

let sbmonc=submitBtn.onclick = handleLogin;
// დავუკავშიროთ ფუნქცია ღილაკის onclick ატრიბუტს