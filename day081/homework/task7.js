// 8) შექმენით class User _password ველით და getter password მეთოდით, რომელიც აბრუნებს პაროლს
class User {
    constructor(password) {
        this._password = password;
    }

    get password() {
        return this._password;
    }
}