// 4) შექმენით ფორმა, სადაც მომხმარებელი შეიყვანს საქმეს (task). ფორმის გაგზავნისას ეს საქმე დაემატოს სიაში (ul ელემენტში) როგორც ახალი li ელემენტი, რომლის გვერდით იქნება “შესრულებულია” ღილაკი. ღილაკზე დაჭერისას კონკრეტული საქმე უნდა გადახაზოს (text-decoration: line-through). გამოიყენეთ addEventListener ღილაკისთვის და კომენტარებით ახსენით როგორ ხდება კონკრეტული li ელემენტზე წვდომა და მისი სტილის შეცვლა
let form = document.createElement('form');
let input = document.createElement('input');
input.type = 'text';
form.appendChild(input);
let button = document.createElement('button');
button.innerText = 'Add Task';
form.appendChild(button);
document.body.appendChild(form);
let ul = document.createElement('ul');
document.body.appendChild(ul);
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = input.value;
    let completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    li.appendChild(completeButton);
    ul.appendChild(li);
    input.value = '';
    completeButton.addEventListener('click', function() {
        li.style.textDecoration = 'line-through';
    });
});
// form ელემენტს ვქმნით და ვამატებთ input და button ელემენტებს.
// შემდეგ ვქმნით ul ელემენტს, სადაც დავამატებთ li ელემენტებს.
// form-ზე ვუსმენთ submit მოვლენას და ვახდენთ event.preventDefault()-ის გამოყენებას, რათა გვერდი არ განახლდეს.
// ახალი li ელემენტი იქმნება და მასში ვამატებთ მომხმარებლის მიერ შეყვანილ ტექსტს და "Complete" ღილაკს.
// როდესაც "Complete" ღილაკზე დაჭერას მოვისმენთ, კონკრეტული li ელემენტის სტილი იცვლება და ტექსტი გადახაზულია.   