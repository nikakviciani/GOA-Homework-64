// ყველა ელემენტს აქვს 3 თვისება
// კუთვნილება (owner)(html ატრიბუტი ,css სტილი)
// მეთოდი (method) - ფნქციონალი
// მოვლენა (material) 
// ყველა ელემენტის თვისებას მივწვდებით dot notation-ის მეშვეობით
// addEventListener - მეთოდი რომელიც აკავშირებს ელემენტს მოვლენის დამკვირვებელს(event)

// 2) შექმენით textarea მესიჯის შემოტანის ველი, დაამატეთ მასზე keydown მოვლენის მსმენელი და როდესაც მომხმარებელი რაიმე სიბოლოს შეიტანს ამ ველში მაშინვე დაუთვალეთ ახალი სიმბოლოების რაოდენობა და უჩვენეთ რამდენი აქვს 200-იანი სიმბოლოების ლიმიტიდან გამოყენებული, თუ ლიმიტს გადასცდება პარაგრაფი უნდა გაწთილდეს, სხვა შემთხვევაში უნდა იყოს მწვანე
const textarea = document.createElement('textarea');
const infoParagraph = document.createElement('p');
infoParagraph.textContent = 'You have used 0 out of 200 characters.';
infoParagraph.style.color = 'green';
textarea.setAttribute('maxlength', '200');

textarea.addEventListener('keydown', function() {
    const currentLength = textarea.value.length + 1; // +1 რადგან keydown ხდება სანამ სიმბოლო დაემატება
    infoParagraph.textContent = `You have used ${currentLength} out of 200 characters.`;
    if (currentLength > 200) {
        infoParagraph.style.color = 'red';
    } else {
        infoParagraph.style.color = 'green';
    }
});
document.body.appendChild(textarea);
document.body.appendChild(infoParagraph);