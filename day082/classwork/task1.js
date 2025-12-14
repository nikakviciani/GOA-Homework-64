// .priventdefault ნიშნავს რომ გვერდის დარესეტებისას ინფორმაცია არ გაქრება
class accaunt {
    #password
    #accaunts
}
// # private cvladi
// 1) შექმენით 4 შესატანი ველი: სახელის, გვარის, ემაილისა და პაროლის. წამოიღეთ ფორმა js-ში, როდესაც მოხდება ფორმის დადასტურება გამოიძახეთ arrow ფუნქცია, ფუნქციაში წამოიღეთ ყველა შესატანი ველის მნიშვნლობა და მისი მეშვეობით შექმენით ახალი ობიექტი new Account (კლასის) მეშვეობით, ახალი შექმნილი ობიექტი შეინახეთ account ცვლადში და დაამატეთ accounts-ს მასივში
class Account {
    #password;
    constructor(fname, lname, email, password) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.#password = password;
    }
    getPassword() {
        return this.#password;
    }
}
var button=document.querySelector('button')
const accounts = [];

const form = document.querySelector('form');

form.addEventListener('click', (e) => {
    e.preventDefault();
    
    const fname = document.querySelector('input[name="firstName"]').value;
    const lname = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    const account = new Account(fname, lname, email, password);
    accounts.push(account);
    
    form.reset();
});