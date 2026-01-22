// 3) შექმენით BackgroundColor კომპონენტი. გამოიყენეთ useState და useEffect. შექმენით მდგომარეობა სახელად color საწყისი მნიშვნელობით "white". შექმენით რამდენიმე ღილაკი (Red, Green, Blue, Pink). useEffect-ის გამოყენებით შეცვალეთ document.body-ის backgroundColor ყოველ ჯერზე, როდესაც color მდგომარეობა შეიცვლება. კომენტარებით ახსენით რატომ არის ეს გვერდითი ეფექტი
import { useEffect, useState } from "react"
const [color, setColor] = useState("white");

function BackgroundColor() {

    useEffect(() => {
        return(() => {
            document.body.style.backgroundColor = color;
        });
    }, [color]);}