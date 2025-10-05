// 3) შექმენით ფორმა ვებგვერდზე, რომელსაც ექნება: სახელი, იმეილი, პაროლი და "დაადასტურე პაროლი" (confirm). როცა მომხმარებელი დააწვება Submit ღილაკს:

// შეამოწმეთ თუ რომელიმე ველი ცარიელია — თუ ცარიელია, alert-ით მოთხოვეთ სრული ინფორმაციის შეყვანა
// თუ პაროლი მოკლეა (length < 8) — alert-ით უთხარით უფრო დიდი პაროლის შეყვანა
// თუ პაროლი და confirm_password ერთმანეთს არ ემთხვევა — გაუშვით alert რომ პაროლები არ ემთხვევა
// შეამოწმეთ რომ იმეილი შეიცავდეს '@' და '.' — თუ არა, დააბრუნეთ შენიშვნა
// // თუ ყველა პირობა დაკმაყოფილდა, გამოიტანეთ alert: "რეგისტრაცია წარმატებული" ან ჩაწერეთ მომხმარებლის სახელი გვერდზე
let form = document.forms[0];
form.onsubmit = function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please enter complete information.');
    } else if (password.length < 8) {
        alert('Please enter a longer password.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
    } else {
        alert('Registration successful!');
        document.body.innerHTML += `<h2>Welcome, ${name}!</h2>`;
    }}