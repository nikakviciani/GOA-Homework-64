// 22) შექმენით User Registration სისტემა: ფორმიდან შეიყვანეთ სახელი, გვარი და ასაკი. გამოიყენეთ class public და private ველებით, getter/setter-ით, private ვალიდაციით და static მეთოდით რეგისტრაციის დასათვლელად. არასწორ მონაცემზე აჩვენეთ შეცდომა

class User {
    #name;
    #surname;
    #age;
    static userCount = 0;

    constructor(name, surname, age) {
        this.setName(name);
        this.setSurname(surname);
        this.setAge(age);
        User.userCount++;
    }

    get name() {
        return this.#name;
    }

    setName(name) {
        if (typeof name === 'string' && name.trim() !== '') {
            this.#name = name;
        } else {
            throw new Error('Invalid name');
        }
    }

    get surname() {
        return this.#surname;
    }

    setSurname(surname) {
        if (typeof surname === 'string' && surname.trim() !== '') {
            this.#surname = surname;
        } else {
            throw new Error('Invalid surname');
        }
    }

    get age() {
        return this.#age;
    }

    setAge(age) {
        if (Number.isInteger(age) && age > 0) {
            this.#age = age;
        } else {
            throw new Error('Invalid age');
        }
    }

    static getUserCount() {
        return User.userCount;
    }
}

// Example usage
try {
    const user1 = new User('John', 'Doe', 30);
    console.log(`User count: ${User.getUserCount()}`);
} catch (error) {
    console.error(error.message);
}