// <!-- 4) შექმენით ობიექტი teacher, რომელსაც ექნება სახელი, საგანი და experience (წლები). დაამატეთ method greet(), რომელიც alert-ით გამოიტანს "Hello, I teach ...". HTML ღილაკზე <button id="greetBtn">Greet</button> დაჭერისას გამოძახეთ greet() -->
const teacher = {
    name: 'Nino',
    subject: 'biology',
    experience: '10 years',
    greet: function() {
        alert(`Hello, I teach ${this.subject}.`);
    }
};

document.getElementById('greetBtn').addEventListener('click', function() {
    teacher.greet();
})
