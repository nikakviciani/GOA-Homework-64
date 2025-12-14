// 11) შექმენით User class და გააკეთეთ default export ფაილის ბოლოში შემდეგ შექმენით ორი named export ფუნქცია getUserName და getUserAge რომლებიც მიიღებენ user ობიექტს და დაბეჭდავენ შესაბამის ინფორმაციას შემოიტანეთ import User და named ფუნქციები სხვა ფაილში და გამოიძახეთ

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export default User;

export function getUserName(user) {
    console.log(user.name);
}

export function getUserAge(user) {
    console.log(user.age);
}