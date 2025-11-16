// 5) შექმენით input ველი და ღილაკი “ძებნა”. გვერდზე გქონდეთ წინასწარ ჩამონათვალი (ul ელემენტში რამდენიმე li ტექსტით). როდესაც მომხმარებელი შეიყვანს სიტყვას და დააჭერს ღილაკს, მხოლოდ ის ელემენტები უნდა დარჩეს ხილული, რომლებიც შეიცავენ შეყვანილ ტექსტს, დანარჩენი უნდა დაიმალოს (display: none). გამოიყენეთ for ციკლი თითოეული li ელემენტის შესამოწმებლად და კომენტარებით ახსენით როგორ ხდება ტექსტის შედარება და ელემენტის დამალვა ან ჩვენება
let searchInput = document.createElement('input');
searchInput.type = 'text';
document.body.appendChild(searchInput);
let searchButton = document.createElement('button');
searchButton.innerText = 'Search';
document.body.appendChild(searchButton);
searchButton.addEventListener('click', function() {
    let filter = searchInput.value.toLowerCase();
    let lis = document.querySelectorAll('ul li');
    for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        if (li.innerText.toLowerCase().includes(filter)) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    }
});
// აქ ვქმნით input ველს და ღილაკს "Search".
// ღილაკზე დაჭერისას ვიღებთ მომხმარებლის მიერ შეყვანილ ტექსტს და ვცვლით მას პატარა ასოებად, რათა შედარება იყოს case-insensitive.
// შემდეგ ვიღებთ ყველა li ელემენტს ul-ის შიგნით და ვატარებთ for ციკლს თითოეულზე.
// თითოეული li ელემენტის ტექსტს ვცვლით პატარა ასოებად და ვამოწმებთ, შეიცავს თუ არა ის მომხმარებლის მიერ შეყვანილ ტექსტს.
// თუ შეიცავს, ელემენტი რჩება ხილული (display: ''), წინააღმდეგ შემთხვევაში ის იკარგება (display: 'none').