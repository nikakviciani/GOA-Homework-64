// 7) შექმენით ორი ფუნქცია: 
// greet(name) ჩვეულებრივი function სინტაქსით აბრუნებს `Hello, ${name}`
// goodbye = (name) => `Goodbye, ${name}` arrow function-ის გამოყენებით
// // ორივე გამოიძახეთ სხვადასხვა არგუმენტით და კომენტარებით ახსენით რა უპირატესობა აქვს arrow function-ს მოკლე, მარტივ ფუნქციებში და eventListener-ებში
let f1= function (name){
    return (`Hello, ${name}`)
}
f1('anna')
let f2 = (name2) =>{
    return (`Goodbye, ${name2}`)
}
f2('may')
// arrow function ხდის ფუნქციას უფრო მოკლეს
// Evenlistn ში  არ არის ახალი ფუნქცია და მისი სხელი შესაქმნელი