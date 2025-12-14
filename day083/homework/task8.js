// 9) შექმენით promise simulateLoading რომელიც setTimeout მეშვეობით 1500 მილიწამში დააბრუნებს resolve ტექსტით მონაცემები ჩაიტვირთა შემდეგ გამოიყენეთ then და catch და ახსენით რეალურ ცხოვრებაში როდის გვჭირდება დატვირთვის სიმულაცია


const simulateLoading = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("მონაცემები ჩაიტვირთა");
    }, 1500);
});

simulateLoading
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("შეცდომა:", error);
    });

// რეალურ ცხოვრებაში დატვირთვის სიმულაცია გამოიყენება:
// 1. API მოთხოვნების დაყოვნების სიმულაციისთვის
// 2. მომხმარებელს გამოსაჩენი loading indicator-ის დემონსტრაციისთვის
// 3. ქსელის ნელი კავშირის სიმულაციისთვის
// 4. ავტომატური ტესტირებისთვის