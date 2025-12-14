// let namesMap = new Map(
//     [
//         ["Luka", 4],
//         [true, 5],
//         [5, 3]
//     ]
// )

// namesMap.delete("Luka")
// namesMap.set("Giorgi", true)
// namesMap.has(true)
// namesMap.get("Luka")
// // namesMap.clear()
// console.log(namesMap.keys())
// console.log(namesMap.values())
// console.log(namesMap.entries())

// console.log(namesMap)

// let mySet = new Set([2, 235,2, 5, 5])
// mySet.add(7)
// mySet.delete(2)
// console.log(mySet.has(235))
// mySet.clear()
// console.log(mySet.size)
// console.log(mySet.values())
// console.log(mySet)

// javascript runs 1 thread

// 2) შექმენით promise ობიექტი, რომელიც arrow ფუნქციას 2 პარამეტრით: resolve, reject. ამ ფუნქციაში შექმენით ცვლადი internetRequest = true, setTimeout-ის მეშვეობით 3 წამის შემდეგ გამოიძახეთ ფუნქცია რომელიც if-ით შეამოწმებს internetRequest-ის ცვლადს, თუ მართალია ეს ცვლადი მაშინ მოახინდეთ resolve სხვა შემთხვევაში კი reject. promise-ის დასრულებამდე ყოველ ნახევარ წამში შეამომწეთ promise-ის მდოგმარეობა

// Promise() არის ობიექტი რომელიც გამოიყენება ასინქრონული ოპერაციების შესასრულებლად და მისი მდგომარეობის (state) მართვისთვის. ის იღებს ფუნქციას, რომელსაც აქვს ორი პარამეტრი: resolve და reject. resolve გამოიყენება ოპერაციის წარმატებით დასრულების შემთხვევაში, ხოლო reject გამოიყენება შეცდომის ან წარუმატებლობის შემთხვევაში.
const newpromise=new Promise((resolve,reject)=>{
    let internetaqress=true
    setTimeout(() => {
        if(internetaqress){
            resolve('internetiaqress aris')
        } else{
            reject('internetiaqress ar aris')
        }
    }, 3000);})

console.log(setInterval(() => {
    console.log(newpromise);
}, 1000));