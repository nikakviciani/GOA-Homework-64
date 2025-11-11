// 2) შექმენით ღილაკი, რომელზე დაჭერისას body ელემენტში დაემატოს ახალი პარაგრაფი, რომელიც შეიცავს შემთხვევით რიცხვს 0-დან 1000-მდე დიაპაზონში. გამოიყენეთ Math.random და Math.floor ფუნქციები შემთხვევითი მთელი რიცხვის მისაღებად და კომენტარებით ახსენით რას აკეთებს თითოეული მათგანი
document.getElementById("addParagraphButton").addEventListener("click", function() {
    // Math.random ფუნქცია აბრუნებს შემთხვევით რიცხვს 0 (მათ შორის) და 1 (არასამთვრობიდან) შორის
    // იმისთვის, რომ მივიღოთ რიცხვი 0-დან 1000-მდე, ვამრავლებთ Math.random()-ის შედეგს 1001-ზე (1000-ის ჩათვლით)            
    let randomNumber = Math.floor(Math.random() * 1001); // შემთხვევითი რიცხვი 0-დან 1000-მდე
    let newParagraph = document.createElement("p"); // ახალი პარაგრაფის ელემენტის შექმნა
    newParagraph.textContent = randomNumber;    // პარაგრაფის ტექსტის დაყენება შემთხვევით რიცხვზე
    document.body.appendChild(newParagraph); // ახალი პარაგრაფის დამატება body თეგში
});