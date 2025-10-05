// 2) შექმენით ვემგვერდი, რომელზეც გექნებათ სახელის, ემაილისა და პაროლის შესაანი ველები, როდესაც მომხარებელი დაადასტურებს თავის მონაცემებს და დააწვება ღილაკს თქვენ შეამოწმეთ რომელიმე ველი ცარიელია თუ არა (if-ით), თუ ასეა alert-ის მეშვეობით გამოუტანეთ რომ შეიყვანოს სრული ინფორმაცია
let form = document.forms[0];
form.onsubmit = function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') { 
    alert('Please enter complete information.');
    } else {
    alert('Form submitted successfully!');
    }
}