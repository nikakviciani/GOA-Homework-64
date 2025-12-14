// 2) შექმენით რაიმე რიცხვების მასივი, შემდეგ 2-ჯერ გამოიყენეთ მასზე map, ერთ შემთხვევაში აიყვანეთ ყველა რიცხვი კვადრტაში, მეორე შემთხვევაში ყველა რიცხვი გაზარდეთ 5-ით. filter-ით გაფილტრეთ ლუწი რიცხვები და მეორე შემთხვევაში დატოვეთ ის რიცხვები ახალ სიაში რომლებიც თავიდან მხოლოდ 1-ხელ მეორდებოდა

let array=[3,43,7,8,,61,99]

let squarearray= array.map((num) =>{num*num})
let arrayplus5= array.map((num) =>{num+5})

let evenNumbers = squarearray.filter((num) => num % 2 === 0);

let singleOccurrence = arrayplus5.filter((num, index, arr) => 
    arr.indexOf(num) === arr.lastIndexOf(num)
);