// 4) შექმენით ფორმა რომელშიც მომხმარებელი შეიყვანს თავის სახელს submit-ზე ეს სახელი შეინახეთ localStorage-ში setItem-ის გამოყენებით და შემდეგ ეკრანზე გამოიტანეთ გამარჯობა [სახელი]
let form = document.createElement('form');
let input = document.createElement('input');
input.type = 'text';    
input.placeholder = 'Enter your name';
let submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';    
let greeting = document.createElement('p');

form.appendChild(input);
form.appendChild(submitButton);
document.body.appendChild(form);
document.body.appendChild(greeting);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = input.value;
    localStorage.setItem('name', name);
    greeting.textContent = `გამარჯობა ${name}`;
});