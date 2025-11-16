// 8) შექმენით ორი ფორმა რეგისტრაციის და შესვლის რეგისტრაციის ფორმაზე submit-ზე username და password ჩაიწეროს localStorage-ში login-ის ფორმაზე submit-ზე შეამოწმეთ ემთხვევა თუ არა localStorage-ში შენახულ მნიშვნელობებს თუ ემთხვევა დაიმალოს რეგისტრაციის ფორმა და გამოჩნდეს ტექსტი Welcome username ასევე გამოჩნდეს Logout ღილაკი Logout-ზე დაჭერისას წაიშალოს მომხმარებელი localStorage-იდან და ფორმა ისევ გამოჩნდეს
let registrationForm = document.createElement('form');
let regUsernameInput = document.createElement('input');
regUsernameInput.type = 'text'; 
regUsernameInput.placeholder = 'Register Username';
let regPasswordInput = document.createElement('input');
regPasswordInput.type = 'password';
regPasswordInput.placeholder = 'Register Password';
let regSubmitButton = document.createElement('button');
regSubmitButton.type = 'submit';
regSubmitButton.textContent = 'Register';   
let loginForm = document.createElement('form');
let loginUsernameInput = document.createElement('input');
loginUsernameInput.type = 'text';   
loginUsernameInput.placeholder = 'Login Username';
let loginPasswordInput = document.createElement('input');
loginPasswordInput.type = 'password';
loginPasswordInput.placeholder = 'Login Password';
let loginSubmitButton = document.createElement('button');
loginSubmitButton.type = 'submit';
loginSubmitButton.textContent = 'Login';
let welcomeMessage = document.createElement('p');
let logoutButton = document.createElement('button');
logoutButton.textContent = 'Logout';
document.body.appendChild(registrationForm);
registrationForm.appendChild(regUsernameInput);
registrationForm.appendChild(regPasswordInput);
registrationForm.appendChild(regSubmitButton);  
document.body.appendChild(loginForm);
loginForm.appendChild(loginUsernameInput);
loginForm.appendChild(loginPasswordInput);
loginForm.appendChild(loginSubmitButton);
document.body.appendChild(welcomeMessage);
document.body.appendChild(logoutButton);
logoutButton.style.display = 'none';
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = regUsernameInput.value;
    let password = regPasswordInput.value;
    localStorage.setItem('username', username);
    localStorage.setItem('  password', password);
    alert('Registration successful! You can now log in.');
    registrationForm.reset();
});
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('  password');
    let inputUsername = loginUsernameInput.value;
    let inputPassword = loginPasswordInput.value;
    if (inputUsername === storedUsername && inputPassword === storedPassword) { 
        loginForm.style.display = 'none';
        welcomeMessage.textContent = `Welcome ${inputUsername}`;
        logoutButton.style.display = 'block';
    }
});

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('username');
    localStorage.removeItem('  password');
    loginForm.style.display = 'block';
    welcomeMessage.textContent = '';
    logoutButton.style.display = 'none';
    registrationForm.reset();
    loginForm.reset();
});