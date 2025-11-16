// 7) შექმენით 2 გვერდი page1.html და page2.html page1-ზე შეიყვანეთ ტექსტი input-ში და შეინახეთ sessionStorage-ში page2-ზე გამოიტანეთ ეს ტექსტი ეკრანზე sessionStorage.getItem-ის გამოყენებით
let input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter some text';
let saveButton = document.createElement('button');
saveButton.textContent = 'Save to Session Storage';
document.body.appendChild(input);
document.body.appendChild(saveButton);  
saveButton.addEventListener('click', () => {
    let text = input.value;
    sessionStorage.setItem('savedText', text);
    alert('Text saved to sessionStorage! Now you can go to page2.html to see it.');
}   
);