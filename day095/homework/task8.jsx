import { useState } from 'react';

// 8) შექმენით მდგომარეობა მომხმარებლის ობიექტისთვის:
// {name: "Your name", password: "123"}

// - ღილაკზე დაჭერისას შეცვალეთ name მნიშვნელობა
// - მეორე ღილაკზე დაჭერისას დააბრუნეთ ობიექტი საწყის მდგომარეობაში
export default function UserProfile() {
    const initialUser = { name: "Your name", password: "123" };
    const [user, setUser] = useState(initialUser);

    const changeName = () => {
        setUser({ ...user, name: "Changed name" });
    };

    const resetUser = () => {
        setUser(initialUser);
    };

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Password: {user.password}</p>
            <button onClick={changeName}>Change Name</button>
            <button onClick={resetUser}>Reset</button>
        </div>
    );
}