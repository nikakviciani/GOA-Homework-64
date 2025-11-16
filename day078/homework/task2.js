// 3) შექმენით simple counter პროექტი სადაც გაქვთ + და - ღილაკები მნიშვნელობა ნაჩვენებია p ელემენტში ღილაკებზე დაჭერისას მნიშვნელობა იზრდება ან კლებულობს გამოიყენეთ addEventListener
let counter = 0;

let p = document.createElement('p');
p.textContent = counter;
p.style.fontSize = '24px';

let incrementButton = document.createElement('button');
incrementButton.textContent = '+';
incrementButton.addEventListener('click', () => {
    counter++;
    p.textContent = counter;
});

let decrementButton = document.createElement('button');
decrementButton.textContent = '-';
decrementButton.addEventListener('click', () => {
    counter--;
    p.textContent = counter;
});

document.body.appendChild(p);
document.body.appendChild(incrementButton);
document.body.appendChild(decrementButton);