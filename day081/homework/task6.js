// 7) შექმენით class BankAccount owner და balance ველებით. დაამატეთ deposit(amount) მეთოდი და static ცვლადი accountsCount. შექმენით ორი ობიექტი და გამოიძახეთ getAccountsCount()
class BankAccount {
    static accountsCount = 0;

    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
        BankAccount.accountsCount++;
    }

    deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('Invalid deposit amount');
        }
        this.balance += amount;
        return this.balance;
    }

    static getAccountsCount() {
        return BankAccount.accountsCount;
    }
}

const acc1 = new BankAccount('Alice', 100);
const acc2 = new BankAccount('Bob', 200);

console.log(BankAccount.getAccountsCount()); // 2