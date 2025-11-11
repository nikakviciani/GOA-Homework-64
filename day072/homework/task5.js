// 6) შექმენით ფუნქცია სახელად manualReverse რომესლაც გადმოეცემა სია, და უნდა დააბრუნოთ შემოტრიალებული ვერსია სიის
function manualReverse(list) {
  const reversedList = [];      // ახალი ცარიელი სია შემოტრიალებული ელემენტებისთვის
    for (let i = list.length - 1; i >= 0; i--) { // ვიწყებთ ბოლო ელემენტიდან და მივდივართ წინ
        reversedList.push(list[i]); // ვამატებთ ელემენტს ახალ სიაში
    }
    return reversedList; // ვაბრუნებთ შემოტრიალებულ სიას
}