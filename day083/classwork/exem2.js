
import accaubt,{exemplfunc, exemplfunc2} from "./exem1";
// import accaubt,{exemplfunc as exfunc, exemplfunc2 as exefunc2} from "./exem1";


// ვაიმპორტებთ
const myAccount = new accaubt('Luka', 1000);
console.log(myAccount);
console.log(exemplfunc());
// console.log(exfunc());
console.log(exemplfunc2());
// console.log(exefunc2());

// resolve ნიშნავს გადაწყვეტას, რომ რაღაცა წარმატებით დასრულდა
// reject ნიშნავს, რომ რაღაცა წარუმატებლად დასრულდა
const myPromise = new Promise((resolve, reject) => {
    const success = true; // შეცვალეთ ეს მნიშვნელობა ტესტირებისთვის
    if (success) {
        resolve('ოპერაცია წარმატებით დასრულდა!');
    } else {
        reject('ოპერაცია წარუმატებლად დასრულდა!');
    }