
arr=[2,4,5,2,6,342]
// map, forich ,filter,radius
let nnn= arr.map((value,index,array) =>{console.log(nnn)} )
// 1-ლი მნიშვნელობა
// 2-ე ინდეხი
// 

// callback
function callback(value, index, array) {
    return value * 2; // sample transformation
}

// forEach
arr.forEach((v, i) => console.log('forEach', i, v));

// map (using the callback)
const doubled = arr.map(callback);
console.log('map result:', doubled);

// filter (keep even numbers)
const evens = arr.filter(v => v % 2 === 0);
console.log('filter (evens):', evens);

// reduce (sum of values)
const sum = arr.reduce((acc, v) => acc + v, 0);
console.log('sum:', sum);

const form = document.querySelector("form");
const div = document.querySelector('div');

const accounts = [];

class Account {
    // #password;
    // static #accounts = [];

    constructor(fname, lname, email, password) {
        this.firstName = fname
        this.lastName = lname
        this.email = email
        this.password = password
        

        // setPassword({
        //     firstName: fname,
        //     lastName: lname,
        //     email: email,
        //     password: password,
        // })
    }

    // static setPassword(curt) {
    //     Account.#accounts.push(this)
    // }

    // static displayAccounts() {
    //     console.log(Account.#accounts)
    // }
}

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let firstName = form.elements.firstName.value;
//     let lastName = form.elements.lastName.value;
//     let email = form.elements.email.value;
//     let password = form.elements.password.value;

//     let account = new Account(firstName, lastName, email, password)
//     accounts.push(account)
// })

// setInterval(() => {
//     console.log(accounts)
// }, 3000)


// 3) შექმენით manualMap და manualFilter თქვენი ხელით გაკეთებული map-ისა და filter-ის ფუნქციები, გატესტეთ ორივე


const manualMap = (array, cb, thisArg) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (i in array) {
            result.push(cb.call(thisArg, array[i], i, array));
        }
    }
    return result;
};

const manualFilter = (array, cb, thisArg) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (i in array) {
            if (cb.call(thisArg, array[i], i, array)) {
                result.push(array[i]);
            }
        }
    }
    return result;
};

console.log('manualMap result:', manualMap(arr, v => v * 2));
console.log('manualFilter (evens):', manualFilter(arr, v => v % 2 === 0));
