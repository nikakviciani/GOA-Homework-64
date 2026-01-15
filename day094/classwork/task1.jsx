// 1) შექმენით შესატანი ველი, რომელზეც დაამტებთ onChange მოვლენას რომ დაადგინოთ რაიმე ტექსტის ცვლილება ველში, მას უტოლებთ jsx გამოსახუელბას ფუნქციით რომელიც გამოიძახებს setUser-ს ფუქნციას, ამისთვის უნდა გქონდეთ დაიმპორტებული useState და აღებული user მდგომარეობა რომელიც თავიდან ცარიელი სტრინგის ტოლია. შესტანი ველის მნიშვნლობის ატრიბუტიც გაუტელეთ user მდგომარეობას და კომენტარებით დაწერეთ თქვენი აზრით როგორ გაძლევთ input-ის მნიშვნლობის ცვლადთან მიბმა უფრო მეტ კონტროლს კომპონენტზე
import { useState} from 'react';
function Task1() {
const [user, setUser] = useState('');
const handleChange = (e) => {
    setUser(e.target.value);
}
    return (
    <input 
        type="text"
        value={user}
        onChange={handleChange}
        placeholder="Enter your name"
    />
    );
}