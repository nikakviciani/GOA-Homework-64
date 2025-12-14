// 21) შექმენით ფორმა 5 ველით (სახელი, გვარი, იმეილი, პაროლი, ქალაქი). მონაცემებით შეიქმნას Account კლასის ობიექტი და დაემატოს accounts მასივში. დაამატეთ printDetails მეთოდი
class Account {
    constructor(firstName, lastName, email, password, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
    }

    printDetails() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Email: ${this.email}`);
        console.log(`City: ${this.city}`);
    }
}

const accounts = [];

// Example of creating an account and adding it to the accounts array
const newAccount = new Account('John', 'Doe', 'john.doe@example.com', 'password123', 'New York');
accounts.push(newAccount);
newAccount.printDetails();