// Math random  რიცხვი ნულაიდან 1 მდე
// Math floor - რიცხვი ქვემოთ
// Math ceil - რიცხვი ზემოთ
// Math round - რიცხვი ახლოს
let randomNumber = Math.random() * 10; // 0-დან 9 მდე
// or
let randomNumber1 = Math.floor(Math.random() * 10); // 0-დან 9 მდე  მარა წილადი ნაწილი არ იქნება
// სიები 
let sia=["luka","ana","nino","giorgi"];
let randomSia = Math.floor(Math.random() * sia.length); // 0-დან 3 მდე
console.log(sia[randomSia]);