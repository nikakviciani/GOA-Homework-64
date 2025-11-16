// 6) sessionStorage-ის გამოყენებით შექმენით counter რომელიც ითვლება მხოლოდ მიმდინარე ტაბში განახლებაზე მნიშვნელობა არ უნდა განულდეს მაგრამ როდესაც დახურავთ ტაბს და თავიდან გახსნით counter ისევ 0-დან უნდა დაიწყოს
let counter = sessionStorage.getItem('counter') ? parseInt(sessionStorage.getItem('counter')) : 0;
let p = document.createElement('p');
p.textContent = counter;
p.style.fontSize = '24px';
let incrementButton = document.createElement('button');
incrementButton.textContent = '+';
incrementButton.addEventListener('click', () => {
    counter++;
    p.textContent = counter;
    sessionStorage.setItem('counter', counter);
});
