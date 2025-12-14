// 13) შექმენით მასივი arr სადაც თითო ელემენტი არის ობიექტი ველებით id და name მაგალითად [{id:123,name:"luka"},{id:456,name:"ana"}] გამოიყენეთ map მეთოდი რომ მიიღოთ ახალი მასივი სადაც დარჩება მხოლოდ სახელები შემდეგ იგივე გააკეთეთ manualMap ფუნქციით და კომენტარებში ახსენით რატომ არის მოსახერხებელი ობიექტებიდან მხოლოდ ერთი ველის ამოღება map მეთოდის საშუალებით

const arr = [
    {id: 123, name: "luka"},
    {id: 456, name: "ana"},
    {id: 789, name: "giorgi"}
];

// Using map method to get only names
const names = arr.map(obj => obj.name);
console.log(names);

// Manual map function
function manualMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const manualNames = manualMap(arr, obj => obj.name);
console.log(manualNames);