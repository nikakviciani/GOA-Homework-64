// .inqludes(' ') ნიშნავს შეიცავს თუ არა სტრიქონი მოცემულ სიმბოლოს ან სიმბოლოების ჯაჭვს
let str = "Hello world";
console.log(str.includes("o"));//ტრუე
// preventdefault() გამოიყენება იმისთვის რომ თავიდან ავიცილოთ დეფოლტური ქმედებები მაგალითად ლინკზე დაჭერისას გვერდის გადატვირთვა
let link = document.querySelector("a");
link.addEventListener('click', (event) => {
    event.preventDefault();
});
// .innerhtml გამოიყენება იმისთვის რომ შევცვალოთ ან მივიღოთ ელემენტის შიგთავსი html ფორმატში
let div = document.querySelector("div");
div.innerHTML = "<p>This is a paragraph</p>";
console.log(div.innerHTML);
// validate() გამოიყენება ფორმის ველების ვალიდაციისთვის
// ვალიდაცია არის პროცესი რომლის დროსაც შემოწმდება არის თუ არა მომხმარებლის მიერ შეყვანილი ინფორმაცია სწორი და აკმაყოფილებს თუ არა განსაზღვრულ კრიტერიუმებს. მაგალითად თუ გვაქვს ფორმა სადაც მომხმარებელი უნდა შეიყვანოს თავისი ელფოსტა, validate ფუნქცია შემოწმებს არის თუ არა შეყვანილი ტექსტი ელფოსტის ფორმატში (მაგალითად შეიცავს თუ არა "@" და ".com").

// localstorage არის ბრაუზერის ფუნქცია რომელიც საშუალებას გვაძლევს შევინახოთ მონაცემები მომხმარებლის კომპიუტერში ისე რომ ისინი დარჩება იქ ბრაუზერის დახურვის შემდეგაც. მაგალითად შეგვიძლია შევინახოთ მომხმარებლის პრეფერენციები ან სესიის ინფორმაცია.
// მაგალითად:
// localStorage.setItem ამატებს მონაცემს
// localStorage.getItem იღებს მონაცემს
// localStorage.removeItem წაშლის მონაცემს
// localStorage.clear წაშლის ყველა მონაცემს

let user = {name: "John",
            age: 30};
localStorage.setItem("user", JSON.stringify(user));
// JSON.stringify გარდაქმნის ობიექტს სტრიქონად რათა შეგვიძლია შევინახოთ localstorage-ში
let retrievedUser = JSON.parse(localStorage.getItem("user"));
// JSON.parse გარდაქმნის სტრიქონს ობიექტად რათა შეგვიძლია გამოვიყენოთ იგი როგორც ნორმალური ობიექტი
console.log(retrievedUser);

// sessionstorage არის ბრაუზერის ფუნქცია რომელიც საშუალებას გვაძლევს შევინახოთ მონაცემები მომხმარებლის კომპიუტერში სესიის განმავლობაში. ეს ნიშნავს რომ მონაცემები დარჩება იქ სანამ ბრაუზერი ან ტაბი არ დაიხურება. მაგალითად შეგვიძლია შევინახოთ დროებითი ინფორმაცია რომელიც საჭიროა მხოლოდ მიმდინარე სესიისთვის.(cookies-ის მსგავსად)
// .მაგალითად:
sessionStorage.setItem("sessionData", "This is some session data");
let data = sessionStorage.getItem("sessionData");
console.log(data);
sessionStorage.removeItem("sessionData");
// sessionStorage.clear(); // წაშლის ყველა მონაცემს სესიის განმავლობაში

// document.cookie არის ბრაუზერის ფუნქცია რომელიც საშუალებას გვაძლევს შევინახოთ და მივიღოთ პატარა ტექსტური მონაცემები მომხმარებლის კომპიუტერში. კუკი გამოიყენება ხშირად იმისთვის რომ შევინახოთ მომხმარებლის პრეფერენციები, სესიის ინფორმაცია და სხვა მცირე მონაცემები რომლებიც საჭიროა ვებ აპლიკაციისთვის.
// მაგალითად:
document.cookie="user=John; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
// ან
let time = new Date('Fri, 31 Dec 2024 23:59:59 GMT' );
document.cookie = `user=John; expires=${time.toUTCString()}; path=/`;
// path=/ ნიშნავს რომ კუკი ხელმისაწვდომია მთელი ვებ საიტისთვის

// ჩვენ ასევე შეგვიძლია შემოყვანილი ინფორმაციის შენახვა localStorage-ში მაგალითად რეგისტრაციისას
// registration.elements ნიშნავს ფორმის ელემენტებს, რომელიც აახალი თვისება რომელიც საშუალებას გვაძლევს ჩვენი მიერ სიმარტივის აქ გამოვიყენოთ და კოდი არის უფრო ეფექტური
let registration = document.querySelector("form");
registration.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(registration);
    let user = {};
    formData.forEach((value, key) => {
        user[key] = value;
    });
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
});
