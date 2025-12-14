// 2) შექმენით studentsMap Map სადაც key არის სტუდენტის სახელი ხოლო value მისი ქულა დაამატეთ 5 სტუდენტი შემდეგ გამოიყენეთ map.get და map.has რომ შეამოწმოთ კონკრეტული სტუდენტი ბოლოს map.delete ით წაშალეთ ერთი სტუდენტი და ჩაწერეთ რა დარჩა

const studentsMap = new Map();

studentsMap.set("ანა", 85);
studentsMap.set("გიორგი", 92);
studentsMap.set("მარია", 78);
studentsMap.set("დავид", 88);
studentsMap.set("ელენე", 95);

console.log("მარია არის სტუდენტი:", studentsMap.has("მარია"));
console.log("მარიას ქულა:", studentsMap.get("მარია"));

studentsMap.delete("დავид");

console.log("დარჩენილი სტუდენტები:");
studentsMap.forEach((ქულა, სახელი) => {
    console.log(sახელი + ": " + ქულა);
});