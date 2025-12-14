// 8) შექმენით saveUser ფუნქცია ამ სინტაქსით: const saveUser = () => { ... } რომელიც input-დან აიღებს მომხმარებლის სახელს და შეინახავს localStorage-ში setItem-ით. შექმენით loadUser = () => { ... } რომელიც ამოიღებს შენახულ მნიშვნელობას და DOM-ში გამოიტანს h2-ში. კომენტარებით ახსენით რატომაა arrow function მოსახერხებელი მცირე და ერთხელ გამოსაყენებელ ფუნქციებში
const saveUser = () => {
            const name = document.getElementById('name').value;
            localStorage.setItem('username', name);
        };

        const loadUser = () => {
            const stored = localStorage.getItem('username');
            document.getElementById('display').textContent = stored ? stored : 'No user saved';
        };

document.getElementById('saveBtn').addEventListener('click', saveUser);
document.getElementById('loadBtn').addEventListener('click', loadUser);
window.addEventListener('DOMContentLoaded', loadUser);