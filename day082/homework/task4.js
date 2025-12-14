// 4) შექმენით Account კლასი და გამოიყენეთ ყველა ნასწავლი კონცეფცია კლასებზე. კლასში უნდა გქონდეთ საჯარო ველები და პირადი ველი #password. გამოიყენეთ constructor სადაც მიიღებთ firstname lastname და password მნიშვნელობებს. შექმენით getter და setter მეთოდები password ველისთვის და ახსენით კომენტარებით როგორ მუშაობს მათი დანიშნულება. დაამატეთ static ველი count რომელიც დაითვლის რამდენი ობიექტი შეიქმნა და static მეთოდი objectCount რომელიც ზრდის ამ მნიშვნელობას ყოველ ახალ ობიექტზე. ასევე მოიყვანეთ მაგალითი პირადი მეთოდის გამოყენებაზე და კომენტარებით ახსენით განსხვავება ჩვეულებრივ მეთოდსა და static მეთოდს შორის

class Account {
    static count = 0; // Static field to count the number of Account instances

    constructor(firstname, lastname, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.#password = password; // Private field for password
        Account.objectCount(); // Increment the count when a new object is created
    }

    #password; // Private field

    // Getter for password
    get password() {
        return this.#password; // Returns the private password
    }

    // Setter for password
    set password(newPassword) {
        this.#password = newPassword; // Sets a new value for the private password
    }

    // Static method to increment the count of Account instances
    static objectCount() {
        Account.count++;
    }

    // Example of a regular method
    displayInfo() {
        console.log(`Account Holder: ${this.firstname} ${this.lastname}`);
    }
}

// Example usage
const account1 = new Account('John', 'Doe', 'securePassword123');
console.log(Account.count); // Outputs: 1
account1.displayInfo(); // Outputs: Account Holder: John Doe