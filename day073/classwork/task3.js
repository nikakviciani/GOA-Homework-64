// setinterval და settimeout ფუნქციები
// setinterval ნიშნავს რაღაც დროის მონაკვეთში მოქმედების '
// 3) შექმენით ნებისმიერ ფუნქცია, რომელსაც გამოიძახებთ ყოველ 3 წამში ერთხელ, შემდეგ ეს ისტრუქცია დააკომენტარეთ და ფუნქცია გამოძახეთ ერთხელ ინსტრუქციის წაკითხვიდან 4 წამის შემდეგ, კომენტარებით ახსენით როგორ მუშაობს setInterval და setTimeout ფუნქციები
function greet() {
    console.log('გამარჯობა! ფუნქცია გამოძახილია:', new Date().toLocaleTimeString());
}

// setInterval მაგალითი (განმეორებით გამოძახება ყოველი 3 წამი):
// const intervalId = setInterval(greet, 3000);
// clearInterval(intervalId); // გამოიყენება setInterval-ის გააჩერებლად

// setInterval(func, delay) — გამოძახებს func-ს ყოველ delay მილიწამში მოთხოვნულად, სანამ არ დაანგარიშებთ clearInterval.
// setTimeout(func, delay) — გამოძახებს func-ს ორჯერად, მხოლოდ ერთხელ, delay მილიწამშიგან.

 // დავკომენდატეთ setInterval და დავიკითხოთ ფუნქცია ერთხელ 4 წამის შემდეგ:
setTimeout(greet, 4000);z