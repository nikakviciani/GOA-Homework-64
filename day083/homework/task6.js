// 7) შექმენით promise რომელიც 2 წამში შეამოწმებს weatherIsGood ცვლადს თუ true იყოს resolve გამოიტანს ტექსტს ამინდი კარგია გასეირნება შემიძლია თუ false იყოს reject ამინდი ცუდია ვერ გავდივარ კომენტარებით ახსენით რა არის pending მდგომარეობა

// Promise-ის შექმნა
const weatherPromise = new Promise((resolve, reject) => {
    // Pending მდგომარეობა: Promise ელოდება 2 წამს
    // Pending = პირველადი მდგომარეობა, სამუშაო მხარდაჭერილი და დასრულება ემ
    setTimeout(() => {
        const weatherIsGood = true; // შეცვლეთ true/false-ით
        
        if (weatherIsGood) {
            // Fulfilled მდგომარეობა: წერტილი შესრულდა
            resolve("ამინდი კარგია გასეირნება შემიძლია");
        } else {
            // Rejected მდგომარეობა: წერტილი უარყო
            reject("ამინდი ცუდია ვერ გავდივარ");
        }
    }, 2000);
});

// Promise-ის შედეგის დამუშავება
weatherPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));