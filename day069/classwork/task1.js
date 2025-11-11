// // .queryselector ნიშნავს ელემენტს, რომელიც შეესაბამება css სელექტორს მაგალითად
// let element = document.querySelector('div'); // აიღებს პირველ div ელემენტს
// // .elements ნიშნავს ელემენტების მასივს, რომელიც შეესაბამება css სელექტორს მაგალითად name    
// let elll= [qe,3,4,,tg,5,6,7,8,9,0];
// // .push() ნიშნავს მასივში ახალი ელემენტის დამატებას
// elll.push('hello');
// 1) შექმენით ვებგვერდი რომელზეც გექნებათ სარეგისტრაციო ფორმა სახელის, ემაილისა და პაროლის შესატანი ველებით, ასევე დამდასტურებელი ღილაკით. როდესაც მომხმარებელი გააგზავნის ინფორმაციას ღილაკზე დაჭერით, თქვენ ეს ინფორმაცია უნდა შეინახოთ (პირობითად) dataBase სიაში ობიექტის სახით, ესეიგი წამოღეთ ყველა HTML-ის ელემენტი javascript-ში შემდეგ ღილაკზე onclick მოვლენისას შექმენით ახალი ანგარიშის (account) ობიექტი რომელშიც მოცემუილი იქნება მომხარებლის სახელი, ემაილი და პაროლი. დამატების შემდეგ გვერდზე გაასუფთავეთ შესატანი ველები, თითოეული account ობიექტი დაამატეთ dataBase მასივში
let dataBase = [];

function addAcaunt() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let account = {
        name: name,
        email: email,
        password: password
    };
    dataBase.push(account);
    console.log(dataBase);
}